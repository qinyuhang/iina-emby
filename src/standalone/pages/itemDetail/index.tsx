import * as React from "react";
import { embyTools } from "../../model";
import { SheetChildrenProps } from "../../components/sheet";
import { SheetTitle } from "../../components/sheetTitle";
import { PlayBtn } from "../../components/playBtn";
// import { UserItemDataDto } from "../../../swagger/typescript/models"

export interface ItemDetailProps extends SheetChildrenProps {
  item: any;
  onCancel: () => void;
}
export interface ItemDetailState {
  result: any;
}
export interface ItemDetailState {}
export class ItemDetail extends React.Component<
  ItemDetailProps,
  ItemDetailState
> {
  state = {
    result: null,
  };
  componentDidMount(): void {
    console.log(this.props);
    const emby = embyTools.getCurrent();
    emby
      .embyAPI({
        url: `/Users/${emby.userID}/Items/${this.props.item.id}`,
      })
      .then((_) => {
        console.log(_);
        this.setState({
          result: _.data,
        });
      });
  }
  render() {
    const { item } = this.props;
    const { result } = this.state;
    const emby = embyTools.getCurrent();
    return (
      <div>
        <SheetTitle
          title={""}
          onCancel={this.props.onCancel}
          cancelText="<Back"
          transparentBg={true}
          noPlaceHolder={true}
        />

        <section className={`relative`}>
          <h1 className={`text-3xl absolute bottom-0 left-0 p-5 w-screen bg-gradient-to-t from-gray-800 z-30`}>{item.name}</h1>
          {item?.id && (
            <img
              src={`${emby.host}/Items/${item.id}/Images/Backdrop/`}
              alt=""
            />
          )}
        </section>

        <section className={`p-5`}>
          {/* <div>{JSON.stringify(result)}</div> */}
          <PlayBtn item={item} />
          {result?.overview && <div className={`mt-5`}>{result?.overview}</div>}
          <div>
            <ul>
              {item?.People?.map((p) => (
                <li key={JSON.stringify(p)}>{JSON.stringify(p)}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
