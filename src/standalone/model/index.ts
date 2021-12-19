/**
 * TODO 一期先使用 EmbyConnector + 自己根据openapi.json生成的types来调用
 * TODO 二期直接改用 openapi 生成的 apiclient
 * 
 * 用来全局保存一个 embyConnector 实例
 * @author: qinyuhangxiaoxiang@gmail.com
 */

import EmbyConnector from "emby-api-ts";
// import openapi from "../../../testground/openapi.json";
// import SwaggerClient from "swagger-client/dist/swagger-client.browser.min.js";
// import { Configuration as EmbyConfiguration, ConfigurationParameters } from "../../swagger/typescript"
// import * as SS from "../../swagger/typescript";

export * from "../../swagger/typescript/models";

// openapi.servers[0].url = 'http://localhost:8096/emby'
// const EmbySwaggerClient = new SwaggerClient({ spec: openapi });
// console.log(
//   openapi,
//   EmbySwaggerClient
// );

// // @ts-ignore
// window.eee = EmbySwaggerClient
// // @ts-ignore
// window.SwaggerClient = SwaggerClient;
// // @ts-ignore
// window.openapi = openapi;
// // @ts-ignore
// window.ss = SS;


let currentEmby: EmbyConnector | null = null;
let embys: Array<EmbyConnector> = [];
let deviceId: string = "";

// const generateSwaggerAPI = (host: string, token: string) => {
//   // deep clone
//   const cloneOpenapi = JSON.parse(JSON.stringify(openapi));
//   cloneOpenapi.servers[0].url = host;
//   const requestInterceptor = (req) => {
//     console.log('requestInterceptor', req);
//     return req;
//   }

//   return new SwaggerClient({ spec: cloneOpenapi });
// }

// // @ts-ignore
// window.generateSwaggerAPI = generateSwaggerAPI

// // @ts-ignore
// window.gg = function(c: ConfigurationParameters) {
//   return new EmbyConfiguration(c);
// }

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
