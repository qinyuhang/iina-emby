/**
 * server search view
 * @author: qinyuhangxiaoxiang@gmail.com
 */
import * as React from "react";
import { embyTools } from "../../model";
import { showLoading } from "../../../utils";
import { hideLoading } from "../../components/loading";
import { ItemList as ItemListComponent } from "../../components/itemList";
import { Sheet, SheetChildrenProps } from "../../components/sheet";
import { SheetTitle } from "../../components/sheetTitle";
import { ItemDetail } from "../itemDetail";
import { AxiosResponse } from "axios";
import {
  SearchSearchHintResult,
  SearchSearchHint,
} from "emby-api-ts/lib/models/models";

export interface ServerSearchProps extends SheetChildrenProps {}
export interface ServerSearchState {
  // TODO pager
  result: SearchSearchHintResult | null;
  showDetail: {
    itemId: string;
    show: boolean;
  };
}

export class ServerSearchView extends React.Component<
  ServerSearchProps,
  ServerSearchState
> {
  state: ServerSearchState = {
    result: null,
    showDetail: {
      itemId: "",
      show: false,
    },
  };
  componentDidMount(): void {}

  doSearch = (e) => {
    e.preventDefault();
    showLoading({});

    const formData = new FormData(e.target);
    console.log(formData);
    const formObj = {};

    // @ts-ignore
    for (var pair of formData.entries()) {
      // console.log(pair[0] + ': ' + pair[1]);
      formObj[pair[0]] = pair[1];
    }
    const emby = embyTools.getCurrent();
    emby
      .embyAPI({
        url: `/Search/Hints`,
        params: {
          SearchTerm: formObj["search"],
        },
      })
      .then((_: AxiosResponse<SearchSearchHintResult>) => {
        hideLoading();
        console.log(_);

        this.setState({
          result: _.data,
        });
      });
  };

  onCancel = () => {
    debugger;
    this.props.onCancel();
  };
  onConfirm = () => {
    this.props.onConfrim();
  };

  onItemClick = (item) => {
    this.setState({
      showDetail: {
        itemId: item.id,
        show: true,
      },
    });
  };

  hideItemView = () => {
    this.setState({
        showDetail: {
          itemId: '',
          show: false,
        },
      });
  };

  render() {
    const { title = "", onConfrim } = this.props;
    const { result, showDetail } = this.state;
    const currentItem =
      result?.searchHints?.filter(
        (i) => String(i.id) === String(showDetail.itemId)
      )[0] || {};

    const inputBaseClassNames = [
      `appearance-none`,
      `rounded-lg`,
      `relative`,
      `block`,
      `w-full`,
      `px-3`,
      `py-2`,
      `border`,
      `focus:z-10`,
      `sm:text-sm`,

      `border-gray-300`,
      `placeholder-gray-500`,
      `text-gray-900`,
      `focus:outline-none`,
      `focus:ring-indigo-500`,
      `focus:border-indigo-500`,

      `dark:bg-gray-700`,
      `dark:text-gray-200`,
      `dark:placeholder-gray-400`,
      `dark:border-gray-500`,
    ].join(" ");
    return (
      <div className={`h-screen overflow-y-scroll`}>
        <SheetTitle
          onCancel={this.onCancel}
          cancelText="Back"
          onConfirm={onConfrim}
          confirmText=""
        ></SheetTitle>
        {/* <div
          className={`absolute z-20 top-0 left-0 w-screen flex justify-between py-3 dark:bg-gray-900 bg-gray-200  p-5 rounded-t-xl`}
        >
          <button className={`text-red-600`} onClick={this.onCancel}>
            Back
          </button>
          <h1 className={`${title ? "" : "opacity-0"}`}>{title}</h1>
          <button
            className={`${onConfrim ? "" : "opacity-0"}`}
            onClick={this.onConfirm}
          >
            Go!
          </button>
        </div> */}

        {/* Place Holder */}
        {/* <div
          className={`opacity-0 w-0 -z-10 flex justify-between py-3 dark:bg-gray-900 bg-gray-200 rounded-xl`}
        >
          <button className={`w-0 text-red-600`}>Back</button>
        </div> */}

        {/* Search input */}
        <section>
          <form className={`p-5`} onSubmit={this.doSearch}>
            <div>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                name="search"
                type="text"
                autoComplete="off"
                required
                className={`${inputBaseClassNames}`}
                placeholder="Search"
              />
            </div>
            {/* <input className={`p-1 w-screen dark:bg-gray-500 rounded-lg`} type="text" name="search" /> */}
          </form>
        </section>

        <ItemListComponent
          itemList={result?.searchHints || []}
          onItemClick={this.onItemClick}
        >
          <Sheet show={showDetail.show} name="item-detail">
            <ItemDetail
              onCancel={this.hideItemView}
              item={currentItem}
            ></ItemDetail>
          </Sheet>
        </ItemListComponent>

        {/* <section> */}
        {/* <ul>
            {result?.searchHints?.map((v) => (
              <li key={JSON.stringify(v)}>{JSON.stringify(v)}</li>
            ))}
          </ul>
        </section> */}
      </div>
    );
  }
}
