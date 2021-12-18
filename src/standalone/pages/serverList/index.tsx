import * as React from "react";

import { ServerConfig } from "../../app";
import { showModal } from "../../../utils";
// @ts-ignore
import icon from "../../assets/icon.png";

export interface ServerListProps {
  onEdit: (serverId: string) => void;
  onEnter: (serverId: string) => void;
  onDelete: (serverId: string) => void;
  onAdd: () => void;
  servers: Array<ServerConfig>;
}
export interface ServerListState {}
export class ServerList extends React.Component<
  ServerListProps,
  ServerListState
> {
  constructor(props) {
    super(props);
  }
  onEnter = (serverId: string) => {
    this.props.onEnter(serverId);
    console.log("onEnter");
  };

  onDelete = (serverId: string) => {
    showModal({
        title: 'Confirm Delete Server?',
        onCancel: console.log,
        onConfirm: () => {
            this.props.onDelete(serverId);
            console.log("onDelete");
        },
    });
  };
  onEdit = (serverId: string) => {
    this.props.onEdit(serverId);
    console.log("onEdit");
  };
  render() {
    const listClassName = `p-2 dark:hover:bg-gray-600 rounded-md`;
    const { servers = [] } = this.props;
    console.log("serverListRender", servers);
    return (
      <div>
        <ul>
          {servers.map((s) => (
            <li
              key={JSON.stringify(s)}
              className={`p-2 dark:hover:bg-gray-600 mt-2 rounded-md flex justify-between items-center`}
            >
              <div
                className={`flex justify-start flex-grow text-xl cursor-pointer`}
                onClick={() => this.onEnter(s.serverId)}
              >
                <img
                  src={icon}
                  alt=""
                  className={`flex-shrink-0 w-6 mr-1 object-contain`}
                />
                {s.serverTitle}
              </div>
              <div>
                <button
                  className={`mr-2`}
                  onClick={() => this.onEdit(s.serverId)}
                >
                  Edit
                </button>
                <button
                  className={`text-red-500`}
                  onClick={() => this.onDelete(s.serverId)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          <li
            className={`p-2 dark:hover:bg-gray-600 dark:bg-gray-700 mt-2 rounded-md flex justify-center items-center`}
          >
            <button className={`flex-grow`} onClick={this.props.onAdd}>
              Add New
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
