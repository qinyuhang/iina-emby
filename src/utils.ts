import { ServerConfig } from "./standalone/app";
import EmbyConnector from "emby-api-ts";

export function makeHost(userInput: Omit<ServerConfig, "serverId">) {
  return `${userInput.https ? "https" : "http"}://${userInput.domain
    .replace(/^http(s)?:\/\//, "")
    .replace(/\:\d+$/, "")}:${userInput.port}`;
}

export { showToast } from "./standalone/components/toast";
export { showModal } from "./standalone/components/modal";
export { showLoading, hideLoading } from "./standalone/components/loading";

export function initEmbyConnectFromUserInput(
  userInput: Omit<ServerConfig, "serverId">
) {
  return new EmbyConnector(`${makeHost(userInput)}`);
}
