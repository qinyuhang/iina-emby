import * as React from "react";
import { embyTools } from "../../model";
import {
  EMBYMessageData,
  MessageName,
  PrefEnum,
  EventNameNum,
} from "../../../constants";

// maybe should change to sortList
export interface ItemListProps {
  parentItem: any; // TODO
  onCancel: () => void;
}
export interface ItemListState {
  // TODO types
  itemList: Array<any>;
}

export class ItemList extends React.Component<ItemListProps, ItemListState> {
  state: ItemListState = {
    itemList: [],
  };
  constructor(props) {
    super(props);
  }

  // TODO 需要分页！
  // TODO 布局改成 grid
  componentDidMount(): void {
    const emby = embyTools.getCurrent();
    emby
      .embyAPI({
        url: `/Users/${emby.userID}/Items`,
        params: {
          ParentId: this.props.parentItem.id,
          SortBy: "SortName",
          SortOrder: "Ascending",
          IncludeItemTypes: "Movie",
          Recursive: true,
          Fields:
            "BasicSyncInfo,CanDelete,PrimaryImageAspectRatio,ProductionYear",
          ImageTypeLimit: 1,
          EnableImageTypes: "Primary,Backdrop,Thumb",

          // TODO load more
          StartIndex: 0,

          //   EnableImageTypes: "Primary,Backdrop,Thumb",
          //   Fields: "BasicSyncInfo,CanDelete,PrimaryImageAspectRatio",
          //   ImageTypeLimit: "1",
          //   IncludeItemTypes: "Movie",

          //   Recursive: "true",
          //   SortBy: "SortName",
          //   SortOrder: "Ascending",
          //   StartIndex: 0,
        },
      })
      .then((_) => {
        debugger;
        console.log(_);
        this.setState({
          itemList: _.data.items,
        });
      });
  }

  // save this to item
  onItemClick = (item) => {
    console.log(item);
    debugger;
    const emby = embyTools.getCurrent();

    // fetch item if is not folder play
    // if is folder
    // emby
    //   .embyAPI({
    //     url: `/Users/${emby.userID}/Items/${item.id}`,
    //   })
    //   .then(console.log);

    const videoUrl = `${emby.host}/Videos/${
      item.id
    }/stream?Static=true&DeviceID=${
      embyTools.getDeviceId()
    }&api_key=${
      emby.token
    }&PlaySessionId=${''}&&filename=${
      encodeURIComponent(
      item.name
    )}`;
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
  onCancel = () => {
    this.props.onCancel();
  };
  render() {
    const { itemList } = this.state;
    const { parentItem } = this.props;
    const emby = embyTools.getCurrent();
    return (
      <div className={`h-screen overflow-y-scroll`}>
        <div
          className={`absolute top-0 left-0 w-screen flex justify-between py-3 dark:bg-gray-900 bg-gray-200  p-5 rounded-t-xl`}
        >
          <button className={`text-red-600`} onClick={this.onCancel}>
            Back
          </button>
          <h1>{parentItem.name}</h1>
          <button className={`opacity-0`}>Empty</button>
        </div>

        {/* placeholder */}
        <div
          className={`opacity-0 w-screen flex justify-between py-3 dark:bg-gray-900 bg-gray-200  p-5 rounded-t-xl`}
        >
          <button className={`text-red-600`} onClick={this.onCancel}>
            Back
          </button>
          <h1>{parentItem.name}</h1>
          <button className={`opacity-0`}>Empty</button>
        </div>

        <div>
          <ul className={`flex flex-wrap row-auto`}>
            {itemList.map((item) => (
              <li
                className={`flex flex-col items-center cursor-pointer p-5`}
                key={JSON.stringify(item)}
                data-json={JSON.stringify(item)}
              >
                {/* TODO replace with itemDetail */}
                <div
                  className={`w-40 rounded-lg overflow-hidden flex flex-col items-center`}
                  onClick={() => this.onItemClick(item)}
                >
                  <img
                    className={`h-48`}
                    src={`${emby.host}/Items/${item.id}/Images/Primary`}
                    alt=""
                  />
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
