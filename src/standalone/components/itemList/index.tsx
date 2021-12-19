import * as React from "react";
import { PlayBtn } from "../playBtn";
import { embyTools } from "../../model";

export interface ItemListProps {
  itemList: Array<any>; //todo
  onItemClick: (item: any) => void;
}

export class ItemList extends React.Component<ItemListProps> {
  onItemClick = (item) => this.props.onItemClick(item);
  render() {
    const { itemList } = this.props;
    const emby = embyTools.getCurrent();
    return (
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
                className={`w-40 rounded-lg relative overflow-hidden flex flex-col items-center`}
              >
                <PlayBtn
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                  item={item}
                />
                <img
                  onClick={() => this.onItemClick(item)}
                  className={`h-48`}
                  src={`${emby.host}/Items/${item.id}/Images/Primary`}
                  alt=""
                />
                <span onClick={() => this.onItemClick(item)}>{item.name}</span>
              </div>
            </li>
          ))}
        </ul>

        {this.props.children}
      </div>
    );
  }
}
