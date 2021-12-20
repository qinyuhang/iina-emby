/// <reference path="../node_modules/iina-plugin-definition/iina/index.d.ts" />
/**
 * entry file
 * @author: qinyuhangxiaoxiang@gmail.com
 */
const {
  core,
  console: IINAConsole,
  event: IINAEvent,
  mpv,
  http,
  menu,
  overlay,
  preferences,
  standaloneWindow,
} = iina;
import {
  PrefEnum,
  EMBYMessageData,
  EventNameNum,
  MessageName,
} from "./constants";
import { Guid } from 'guid-factory';

const item = menu.item("emby");

const homeFilePath = "dist/standalone/index.html";

standaloneWindow.loadFile(homeFilePath);
standaloneWindow.setProperty({ title: "IINA-EMBY" });

// TODO 这个定义不准
// IINAConsole.log(
//   'iina',
//   `${prefPrefix}.auto-open`,
//   preferences.get(`${prefPrefix}.auto-open`)
// )

// Show Emby Home
menu.addItem(
  menu.item("Show Emby Home", () => {
    standaloneWindow.open();
  })
);

// register event listener to communicate with webview
standaloneWindow.onMessage(MessageName, (data: EMBYMessageData) => {
  // @ts-ignore
  IINAConsole.log("emby message", data);
  switch (data.event) {
    case "login":
      break;
    case EventNameNum.Load:
      console.log("global get window-load");
      const serverList = preferences.get(PrefEnum.ServerList) || [];
      const deviceId = preferences.get(PrefEnum.DeviceId) || Guid.newGuid();
      preferences.set(PrefEnum.DeviceId, deviceId);
      standaloneWindow.postMessage(MessageName, {
        event: EventNameNum.Init,
        data: {
          serverList,
          deviceId,
        },
      });
      break;
    case EventNameNum.Play:
      core.open(data.data.url);
      break;
    case EventNameNum.Set:
      preferences.set(data.data.key, data.data.value);
      preferences.sync();
      break;
    case EventNameNum.Get:
      const value = preferences.get(data.data.key);
      standaloneWindow.postMessage(MessageName, {
        event: EventNameNum.Get,
        data: {
          key: data.data.key,
          value,
        },
      });
      break;
  }
});

const isPrefAutoOpen = preferences.get(PrefEnum.AutoOpen);
if (isPrefAutoOpen) {
  standaloneWindow.open();
}