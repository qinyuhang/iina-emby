/**
 * 添加/修改 服务器信息的卡片
 */
import * as React from "react";

import { ServerConfig } from "../../app";
import { initEmbyConnectFromUserInput, makeHost } from "../../../utils";
import { ItemList } from "../itemList";
import { Sheet, SheetChildrenProps } from "../../components/sheet";
import { SheetTitle } from "../../components/sheetTitle";
import { ServerSearchView } from "../serverSearch";
import EmbyConnector from "emby-api-ts";
import { embyTools } from "../../model";
import { showLoading, hideLoading } from "../../../utils";
import * as EMBYModels from "emby-api-ts/lib/models/models";

export interface ServerHomeProps
  extends Partial<ServerConfig>,
    SheetChildrenProps {
  onSave: (formData: any) => void;
  onCancel: () => void;
  serverConfig: ServerConfig;
}

export interface ServerHomeState extends ServerConfig {
  //   didMount: boolean;

  myViews: Array<any>;
  showItemList: boolean;
  currentItemId: string;
  currentItem: null | any; // TODO
  showSearch: boolean;
}

export class ServerHome extends React.Component<
  ServerHomeProps,
  ServerHomeState
> {
  state: ServerHomeState = {
    // didMount: false,
    domain: "",
    username: "",
    password: "",
    https: false,
    port: 0,
    serverId: "",
    serverTitle: "",
    userId: "",

    token: "",

    myViews: [],

    showItemList: false,
    currentItemId: "",
    currentItem: null,
    showSearch: false,
  };

  emby: EmbyConnector | null;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.serverConfig) {
      showLoading({});
      this.setState(this.props.serverConfig);

      this.emby = initEmbyConnectFromUserInput(this.props.serverConfig);
      embyTools.setCurrent(this.emby);

      // @ts-ignore
      window.emby = this.emby;

      let fp = Promise.resolve();
      if (!this.emby.token) {
        fp = this.emby
          .authenticateByName(
            this.props.serverConfig.username,
            this.props.serverConfig.password
          )
          .then(() => {});
      }

      fp.then((_) => {
        this.emby
          .embyAPI({
            url: `/Users/${this.emby.userID}/Views`,
          })
          .then((_) => {
            this.setState(
              {
                myViews: _.data.items,
              },
              () => {
                hideLoading();
              }
            );
          });
      });
    }
  }

  getLatests = () => {
    this.emby.embyAPI({
      url: `/Users/${this.emby.userID}/Items/Latest`,
    });
  };

  // initAPI
  // 1 /openapi
  // 2 /Users
  //
  // 3 res.paths.items
  // 4 res1.data.items
  // 5 forEach res get /items/{id}
  initApi = () => {
    this.emby
      ?.embyAPI({
        url: "/openapi",
      })
      .then((_) => {
        console.log("initapi", _);
      });
  };

  onCancel = () => {
    this.props.onCancel();
  };

  onItemClick = (item) => {
    this.setState({
      showItemList: true,
      currentItemId: item.id,
      currentItem: item,
    });
  };

  onSearchClick = () => {
    this.setState({
      showSearch: true,
    });
  };

  hideSearch = () => {
    this.setState({
      showSearch: false,
    });
  };

  hideItem = () => {
    this.setState({
      showItemList: false,
    });
  };

  render() {
    const {
      //   didMount,
      serverTitle,

      myViews: views = [],
      showItemList,
      currentItemId,
      currentItem,
      showSearch,
    } = this.state;
    const inputBaseClassNames = [
      `appearance-none`,
      `rounded-none`,
      `relative`,
      `block`,
      `w-full`,
      `px-3`,
      `py-2`,
      `border`,
      `focus:z-10`,
      `sm:text-sm`,

      `border-gray-300`,
      `placeholder-gray-500`,
      `text-gray-900`,
      `focus:outline-none`,
      `focus:ring-indigo-500`,
      `focus:border-indigo-500`,

      `dark:bg-gray-700`,
      `dark:text-gray-200`,
      `dark:placeholder-gray-400`,
      `dark:border-gray-500`,
    ].join(" ");
    return (
      <div
        className={`transition-all ease-in-out h-screen w-screen absolute ${"top-0"} rounded-xl dark:bg-gray-800 bg-gray-100`}
      >
        <SheetTitle
          title={serverTitle}
          cancelText="Exit"
          confirmText="Search"
          onCancel={this.onCancel}
          onConfirm={this.onSearchClick}
        />

        <div className="home">
          <section className="p-2 px-4">
            <h2 className={`mb-2 text-lg`}>我的媒体库</h2>
            {/* my media todo use section */}
            <ul
              className={`flex row-auto overflow-x-scroll -mx-5 hidden-scroll-bar`}
            >
              {views.map((v) => (
                <li
                  className={`flex flex-col items-center cursor-pointer px-5`}
                  key={v.id}
                  data-json={JSON.stringify(v)}
                  onClick={() => this.onItemClick(v)}
                >
                  <div
                    className={`w-40 h-24 rounded-lg overflow-hidden`}
                    data-bg={`${this.emby.host}/Items/${v.id}/Images/Primary`}
                    style={{
                      backgroundImage: `url('${this.emby.host}/Items/${v.id}/Images/Primary')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  {v.sortName}
                </li>
              ))}
            </ul>
          </section>

          {/* continue watch */}

          {/* Latest! map section */}

          <Sheet show={showItemList} name="item-list">
            <ItemList
              parentItem={currentItem}
              onCancel={this.hideItem}
            ></ItemList>
          </Sheet>

          <Sheet show={showSearch} name="server-search">
            <ServerSearchView
              onCancel={this.hideSearch}
              onConfrim={console.log}
              title="Search"
            ></ServerSearchView>
          </Sheet>
        </div>
      </div>
    );
  }
}
