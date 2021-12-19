import * as React from "react";
import { embyTools } from "../../model";
import { EventNameNum, MessageName } from "../../../constants";

export interface PlayBtnProps {
  onPlay?: () => void;
  item: any; // TODO
  className?: string;
  // TODO resume
}

export class PlayBtn extends React.Component<PlayBtnProps> {
  play = () => {
    const { item } = this.props;
    const emby = embyTools.getCurrent();
    const videoUrl = `${emby.host}/Videos/${
      item.id
    }/stream?Static=true&DeviceID=${embyTools.getDeviceId()}&api_key=${
      emby.token
    }&PlaySessionId=${""}&&filename=${encodeURIComponent(item.name)}`;
    // @ts-ignore
    if (global.iina || window.iina) {
      // @ts-ignore
      iina.postMessage(MessageName, {
        event: EventNameNum.Play,
        data: {
          url: videoUrl,
        },
      });
    }
  };
  render() {
    const { className = "" } = this.props;
    return (
      <button
        className={`rounded-lg border-2 dark:border-gray-300 px-4 ${className}`}
        onClick={this.play}
      >
        Play
      </button>
    );
  }
}
