/// <reference path="../../node_modules/iina-plugin-definition/iina/index.d.ts" />
/**
 *
 * 一期没有加 react-router 和 react-router-dom 因为目前还不考虑在url里面带状态。
 * 一期也没有加 redux 来做状态管理
 */
import * as React from "react";
import EmbyConnector from "emby-api-ts";
import {
  EMBYMessageData,
  MessageName,
  PrefEnum,
  EventNameNum,
} from "../constants";

import { ServerInfoCard } from "./pages/serverInfo";
import { ServerList } from "./pages/serverList";
import { ServerHome } from "./pages/serverHome";
import { makeHost, showModal, showToast } from "../utils";
import { Sheet } from "./components/sheet";
import { embyTools } from "./model";
// @ts-ignore
import icon from "./icon.png";
// @ts-ignore
import LogoDark from "./assets/logodark.png";
// @ts-ignore
import LogoWhite from "./assets/logowhite.png";

export interface ServerInState {
  serverId: string;
  serverName: string;
}

// 从storage里面来的数据
export interface ServerConfig {
  // Saved UserInput start
  domain: string;
  username: string;
  password: string;
  https: boolean;
  port: number;
  serverTitle: string;
  // Saved UserInput end

  serverId: string;
  userId: string;
  token: string;
}

export interface AppProps {}
export interface AppState {
  serverList: Array<ServerConfig>;

  //
  currentViewServerId: string | null;

  showEdit: boolean;

  showAdd: boolean;

  showServerHome: boolean;

  currentEditServerId: string | null;
}

export class App extends React.Component<AppProps, AppState> {
  /**
   * 记录当前server的信息
   */
  currentServer: EmbyConnector | null = null;
  servers: Array<EmbyConnector> = [];
  state: AppState = {
    serverList: [],
    currentViewServerId: null,
    showAdd: false,
    showEdit: false,
    showServerHome: false,

    currentEditServerId: null,
  };

  constructor(props) {
    super(props);
  }
  componentDidMount(): void {
    // @ts-ignore
    if (global.iina || window.iina) {
      // @ts-ignore
      iina.onMessage(MessageName, (data: EMBYMessageData) => {
        // only for debug use
        // showToast({
        //   title: MessageName + JSON.stringify(data.data),
        // });

        switch (data.event) {
          case EventNameNum.Init:
            this.init(data);
            embyTools.setDeviceId(data.data.deviceId);
            console.log("emby webview init", data);
          // showToast({
          //   title: "init" + JSON.stringify(data.data),
          // });
        }
      });

      // @ts-ignore
      iina.postMessage(MessageName, {
        event: EventNameNum.Load,
      });
    }
  }

  init = (
    data: EMBYMessageData<{
      serverList: Array<ServerConfig>;
    }>
  ) => {
    const { serverList: serversFromInitData = [] } = data.data;
    const serversInState = this.state.serverList;
    const pa: Array<Promise<ServerConfig>> = [];
    try {
      serversFromInitData.forEach((s) => {
        pa.push(
          this.initOneFromUserInput(s).then((emby) => {
            embyTools.addEmby(emby);
            this.servers.push(emby);
            return {
              ...s,
              token: emby.token,
            };
          })
        );
      });

      Promise.all(pa).then((s) => {
        debugger;
        this.setState(
          {
            serverList: [...serversInState, ...s],
          },
          () => {
            // save back
            this.sync({
              key: PrefEnum.ServerList,
              value: [...serversInState, ...s],
            });
          }
        );
      });
    } catch (e) {}
  };

  /**
   * TODO add token
   * @param userInput
   * @returns
   */
  initOneFromUserInput = (initData: Omit<ServerConfig, "serverId">) => {
    const emby = new EmbyConnector(`${makeHost(initData)}`, initData.token);
    return new Promise<EmbyConnector>((r) => {
      if (!initData.token) {
        emby
          .authenticateByName(initData.username, initData.password)
          .then(() => r(emby));
      } else {
        r(emby);
      }
    });
  };

  /**
   * Sync webview server info to globalEntry
   */
  sync = (syncOpt: { key: string; value: any }) => {
    console.log(syncOpt, syncOpt.key);
    // @ts-ignore
    if (global.iina || window.iina) {
      // @ts-ignore
      iina.postMessage(MessageName, {
        event: EventNameNum.Set,
        data: syncOpt,
      });
    }
  };

  /**
   * TODO delete
   * when save new
   * this method will new EmbyConnect,
   * call EmbyConnectInstance.authenticateByName to get serverId
   * then complete a serverConfig Object,
   * setState
   * call sync
   */
  saveNew = () => {};

  /**
   * delete
   * setState
   * sync
   */
  delete = (serverId: string) => {
    this.setState(
      {
        serverList: this.state.serverList.filter(
          (s) => s.serverId !== serverId
        ),
      },
      () => {
        this.sync({
          key: PrefEnum.ServerList,
          value: this.state.serverList,
        });
      }
    );
  };

  edit = (serverId: string) => {
    this.setState({
      showEdit: true,
      currentEditServerId: serverId,
    });
  };

  enter = (serverId: string) => {
    this.setState({
      showServerHome: true,
      currentViewServerId: serverId,
    });
  };

  exit = () => {
    this.setState({
      showServerHome: false,
    });
  };

  showAdd = () => {
    this.setState({
      showAdd: true,
    });
  };

  onSave = (data: ServerConfig) => {
    let nextServerList = [];

    const { serverList } = this.state;
    let result = serverList.filter((s) => s.serverId === data.serverId)[0];

    // edit
    if (result) {
      Object.assign(result, data);
    } else {
      // add new
      result = data;
    }
    nextServerList = nextServerList.concat(
      [result],
      serverList.filter((s) => s.serverId !== data.serverId)
    );
    this.setState({
      serverList: nextServerList,
    });
    this.sync({
      key: PrefEnum.ServerList,
      value: nextServerList,
    });
    this.onCancel();
  };

  onCancel = () => {
    this.setState({
      showAdd: false,
      showEdit: false,
      showServerHome: false,
      currentEditServerId: null,
    });
  };

  render() {
    const {
      showAdd,
      showEdit,
      serverList,
      showServerHome,
      currentEditServerId,
      currentViewServerId,
    } = this.state;
    const currentEditServer =
      serverList.filter((s) => s.serverId === currentEditServerId)[0] || {};
    const currentViewServer =
      serverList.filter((s) => s.serverId === currentViewServerId)[0] || null;

    return (
      <div className="h-screen overflow-y-scroll">
        <Sheet
          name="server-list"
          show={true}
          scaleToBeCoverd={showAdd || showEdit}
        >
          <div
            className={`server-list relative dark:bg-gray-800 h-screen p-5 transition-all ease-in-out`}
          >
            <h1 className="text-center text-6xl mb-4 flex items-center justify-center">
              <img className={`h-12 light:hidden`} src={LogoWhite} alt="" />
              <img className={`h-12 dark:hidden`} src={LogoDark} alt="" />
            </h1>

            {/* <!-- Server List --> */}
            <ServerList
              servers={serverList}
              onDelete={this.delete}
              onEdit={this.edit}
              onEnter={this.enter}
              onAdd={this.showAdd}
            ></ServerList>
          </div>
        </Sheet>

        <Sheet top={40} show={showAdd || showEdit} name="server-info">
          <ServerInfoCard
            onCancel={this.onCancel}
            onSave={this.onSave}
            {...currentEditServer}
          />
        </Sheet>

        <Sheet show={showServerHome} name="server-home">
          <ServerHome
            serverConfig={currentViewServer}
            onCancel={this.onCancel}
            onSave={this.onSave}
          />
        </Sheet>
      </div>
    );
  }
}
