import * as React from "react";
import { embyTools } from "../../model";
import { SheetChildrenProps } from "../../components/sheet";
import { SheetTitle } from "../../components/sheetTitle";
import { PlayBtn } from "../../components/playBtn";
import { hideLoading, showLoading } from "../../../utils";
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
    showLoading({});
    const emby = embyTools.getCurrent();
    emby
      .embyAPI({
        url: `/Users/${emby.userID}/Items/${this.props.item.id}`,
      })
      .then((_) => {
        hideLoading();
        this.setState({
          result: _.data,
        });
      });
  }
  componentWillUnmount(): void {
    hideLoading();
  }
  render() {
    const { item } = this.props;
    const { result } = this.state;
    const emby = embyTools.getCurrent();
    return (
      <div className="h-screen overflow-y-scroll">
        <SheetTitle
          title={""}
          onCancel={this.props.onCancel}
          cancelText="Back"
          transparentBg={true}
          noPlaceHolder={true}
        />

        <section className={`relative`}>
          <div
            className={`absolute bottom-0 left-0 p-5 w-screen bg-gradient-to-t backdrop-blur-1 from-gray-800 z-50`}
          >
            <h1 className={`text-3xl`}>
              {item.name}
              {item.isFolder ? "folder" : ""}
            </h1>
            <h2>
              Rate: {result?.communityRating ? result.communityRating : ""}
            </h2>
          </div>
          {item?.id && (
            <img
              style={{
                height: `calc(58vw)`,
              }}
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
