/**
 * 用来全局保存一个 embyConnector 实例
 * @author: qinyuhangxiaoxiang@gmail.com
 */

import EmbyConnector from "emby-api-ts";

let currentEmby: EmbyConnector | null = null;
let embys: Array<EmbyConnector> = [];
let deviceId: string = '';

export const embyTools = {
  getCurrent: () => currentEmby,
  setCurrent: (n: EmbyConnector) => (currentEmby = n),
  addEmby: (emby: EmbyConnector) => {
    // serverId user 二元组
    const exists =
      embys.filter((e) => e.name === emby.name && e.serverID === emby.serverID)
        .length !== 0;
    if (!exists) {
      embys.push(emby);
    }
  },
  getEmby: (serverID: string, username: string) => {
    const exists = embys.filter(
      (e) => e.name === username && e.serverID === serverID
    );
    return exists[0] || null;
  },
  getDeviceId: () => {
    return deviceId;
  },
  setDeviceId: (id: string) => {
    deviceId = id;
  },
};
