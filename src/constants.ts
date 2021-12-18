/**
 * 用来存储在 iina preference 的时候使用的前缀
 */
export const prefPrefix = "online.welkin.iina-emby";

/**
 * 使用在存储到iina preference 的key
 */
export const PrefEnum = {
  AutoOpen: `${prefPrefix}.auto-open`,
  ServerList: `${prefPrefix}.server-list`,
  DeviceId: `${prefPrefix}.device-id`,
};

/**
 * 用来做 standaloneWindow 与 GlobalEntry MainEntry 的message事件名字
 */
export const MessageName = `${prefPrefix}.message`;

/**
 * 在 standaloneWindow 与 GlobalEntry MainEntry 之间的 data 的 event 的枚举
 */
export const EventNameNum = {
  Load: `${prefPrefix}.load`,
  Init: `${prefPrefix}.init`,
  Save: `${prefPrefix}.save`,
  Get: `${prefPrefix}.get`,
  Set: `${prefPrefix}.set`,
  Play: `${prefPrefix}.play`,
};

/**
 * 传递咋
 */
export interface EMBYMessageData<T = any> {
  event: string; // TODO specify
  data: T;
}
