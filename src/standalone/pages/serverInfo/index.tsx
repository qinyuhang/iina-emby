/**
 * 添加/修改 服务器信息的卡片
 */
import * as React from "react";
import {
  initEmbyConnectFromUserInput,
  showToast,
  showLoading,
  hideLoading,
} from "../../../utils";
import { ServerConfig } from "../../app";
import { embyTools } from "../../model";
import { SheetChildrenProps } from "../../components/sheet";

export interface ServerInfoCardProps extends Partial<ServerConfig>, SheetChildrenProps {
  onSave: (formData: any) => void;
  onCancel: () => void;
}
export interface ServerInfoCardState extends ServerConfig {}

export class ServerInfoCard extends React.Component<
  ServerInfoCardProps,
  ServerInfoCardState
> {
  state: ServerInfoCardState = {
    domain: "",
    username: "",
    password: "",
    https: false,
    port: 0,
    serverId: "",
    serverTitle: "",
    token: "",
  };

  constructor(props) {
    super(props);
    this.state.port = Number(props.port) || 8096;
  }

  componentDidMount() {
    this.registerKeyboardEvent();
    this.setState({
      domain: this.props.domain,
      username: this.props.username,
      password: this.props.password,
      https: this.props.https,
      port: Number(this.props.port) || 8096,

      serverId: this.props.serverId,
      serverTitle: this.props.serverTitle,
    });
  }
  componentWillUnmount(): void {
    this.unregisterKeyboradEvent();
  }

  kbdEvents = (e: KeyboardEvent) => {
    if (e.keyCode === 27 || e.key === "Escape") {
      this.onCancel();
    }
  };

  registerKeyboardEvent = () => {
    document.addEventListener("keydown", this.kbdEvents);
  };
  unregisterKeyboradEvent = () => {
    document.removeEventListener("keydown", this.kbdEvents);
  };
  // 这个方法在 setState 的回调里面会尝试调用 iina.preference.set
  setStateAndSync = () => {};

  // 不用 async 是因为在IINA中regenerator runtime会报错
  onSave = (e) => {
    e.preventDefault();
    showLoading({});
    const formData = new FormData(e.target);
    console.log(formData);
    const formObj = {};

    // @ts-ignore
    for (var pair of formData.entries()) {
      // console.log(pair[0] + ': ' + pair[1]);
      formObj[pair[0]] = pair[1];
    }
    if (formObj["https"] === "on") {
      formObj["https"] = true;
    }
    if (this.props.serverId) {
      formObj["serverId"] = this.props.serverId;
      this.props.onSave(formObj);
      hideLoading();
    } else {
      const emby = initEmbyConnectFromUserInput(formObj as ServerConfig);
      Promise.race([
        emby
          .authenticateByName(
            (formObj as ServerConfig).username,
            (formObj as ServerConfig).password
          )
          .then((r) => {
            formObj["serverId"] = r.serverId;

            embyTools.addEmby(emby);
            formObj["token"] = r.accessToken;
            this.props.onSave(formObj);
            return true;
          })
          .catch(() => false),
        new Promise((r) => {
          setTimeout(() => r(false), 5e3);
        }),
      ]).then((r) => {
        hideLoading();
        !r &&
          showToast({
            title: "PLZ check your info",
          });
      });
    }
  };

  onCancel = () => {
    this.props.onCancel();
  };

  render() {
    const {
      domain = "",
      username,
      password,
      https,
      port = 8090,
      serverTitle,
    } = this.state;
    console.log("render", this.state, this.props);
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
        <form className="space-y-6" onSubmit={this.onSave}>
          <div
            className={`flex justify-between py-3 dark:bg-gray-900 bg-gray-200  p-5 rounded-t-xl`}
          >
            <button className={`text-red-600`} onClick={this.onCancel}>
              Cancel
            </button>
            <h1>Emby</h1>
            <button className={`text-blue-500`} type="submit">
              Save
            </button>
          </div>
          <div className={`conatainer p-5`}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="serverTitle" className="sr-only">
                  serverTitle
                </label>
                <input
                  id="serverTitle"
                  name="serverTitle"
                  type="text"
                  autoComplete="off"
                  required
                  className={`${inputBaseClassNames} rounded-t-md`}
                  placeholder="ServerTitle"
                  defaultValue={serverTitle}
                />
              </div>

              <div>
                <label htmlFor="domain" className="sr-only">
                  Domain
                </label>
                <input
                  id="domain"
                  name="domain"
                  type="text"
                  autoComplete="off"
                  required
                  className={`${inputBaseClassNames}`}
                  placeholder="Domain"
                  defaultValue={domain}
                />
              </div>

              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="off"
                  required
                  className={`${inputBaseClassNames}`}
                  placeholder="Username"
                  defaultValue={username}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  required
                  className={`${inputBaseClassNames}`}
                  placeholder="Password"
                  defaultValue={password}
                />
              </div>

              <div>
                <label htmlFor="port" className="sr-only">
                  Port
                </label>
                <input
                  id="port"
                  name="port"
                  type="text"
                  required
                  autoComplete="off"
                  className={`${inputBaseClassNames}`}
                  placeholder="Port"
                  defaultValue={port}
                />
              </div>

              <div>
                <div className={`${inputBaseClassNames} rounded-b-md`}>
                  <label
                    htmlFor="https"
                    className="flex items-center justify-between cursor-pointer"
                  >
                    {/* <!-- label --> */}
                    <div className="text-gray-700 dark:text-gray-100">
                      https
                    </div>

                    {/* <!-- toggle --> */}
                    <div className="relative">
                      {/* <!-- input --> */}
                      <input
                        type="checkbox"
                        name="https"
                        id="https"
                        className="sr-only"
                      />
                      {/* <!-- line --> */}
                      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                      {/* <!-- dot --> */}
                      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
