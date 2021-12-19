import * as React from "react";
import { embyTools } from "../../model";
import {
  EMBYMessageData,
  MessageName,
  PrefEnum,
  EventNameNum,
} from "../../../constants";
import { ItemDetail } from "../itemDetail";
import { Sheet, SheetChildrenProps } from "../../components/sheet";
import { SheetTitle } from "../../components/sheetTitle";
import { PlayBtn } from "../../components/playBtn";
import { ItemList as ItemListComponent } from "../../components/itemList";
// maybe should change to sortList
export interface ItemListProps extends SheetChildrenProps {
  parentItem: any; // TODO
  onCancel: () => void;
}
export interface ItemListState {
  // TODO types
  itemList: Array<any>;

  showDetail: {
    itemId: string;
    show: boolean;
  };
}

export class ItemList extends React.Component<ItemListProps, ItemListState> {
  state: ItemListState = {
    itemList: [],
    showDetail: {
      itemId: "",
      show: false,
    },
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
    this.setState({
      showDetail: {
        itemId: item.id,
        show: true,
      },
    });

    // console.log(item);
    // debugger;
    // const emby = embyTools.getCurrent();

    // // fetch item if is not folder play
    // // if is folder
    // // emby
    // //   .embyAPI({
    // //     url: `/Users/${emby.userID}/Items/${item.id}`,
    // //   })
    // //   .then(console.log);

    // const videoUrl = `${emby.host}/Videos/${
    //   item.id
    // }/stream?Static=true&DeviceID=${embyTools.getDeviceId()}&api_key=${
    //   emby.token
    // }&PlaySessionId=${""}&&filename=${encodeURIComponent(item.name)}`;
    // // @ts-ignore
    // if (global.iina || window.iina) {
    //   // @ts-ignore
    //   iina.postMessage(MessageName, {
    //     event: EventNameNum.Play,
    //     data: {
    //       url: videoUrl,
    //     },
    //   });
    // }
  };
  hideItemView = () => {
    this.setState({
      showDetail: {
        itemId: "",
        show: false,
      },
    });
  };
  onCancel = () => {
    this.props.onCancel();
  };
  render() {
    const { itemList, showDetail } = this.state;
    const { parentItem } = this.props;
    const currentItem =
      itemList.filter((i) => i.id === showDetail.itemId)[0] || {};
    const emby = embyTools.getCurrent();
    return (
      <div className={`h-screen overflow-y-scroll`}>
        <SheetTitle
          title={parentItem.name}
          cancelText="Back"
          onCancel={this.onCancel}
        />

        <ItemListComponent itemList={itemList} onItemClick={this.onItemClick}>
          <Sheet show={showDetail.show} name="item-detail">
            <ItemDetail
              onCancel={this.hideItemView}
              item={currentItem}
            ></ItemDetail>
          </Sheet>
        </ItemListComponent>
        
      </div>
    );
  }
}
