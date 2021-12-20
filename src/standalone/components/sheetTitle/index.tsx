import * as React from "react";
import { SheetChildrenProps } from "../sheet";

export interface SheetTitleProps extends SheetChildrenProps {
  cancelText?: string;
  onCancel: () => void;
  title?: string;
  confirmText?: string;
  onConfirm?: () => void;
  noPlaceHolder?: boolean;
  transparentBg?: boolean;
}

export class SheetTitle extends React.Component<SheetTitleProps> {
  render() {
    const {
      title,
      onCancel,
      onConfirm,
      cancelText,
      confirmText,
      noPlaceHolder,
      transparentBg,
    } = this.props;
    return (
      <React.Fragment>
        <div
          className={`flex justify-between py-3 p-5 fixed w-screen dark:bg-gray-900 bg-gray-200 ${
            transparentBg ? "bg-transparent dark:bg-transparent" : ""
          } z-100`}
        >
          <button className={`text-red-600 strok-text`} onClick={onCancel}>
            {cancelText ? cancelText : "Cancel"}
          </button>
          {title && <h1>{title}</h1>}
          <button
            className={`${confirmText ? "strok-text" : "opacity-0"}`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
        {!noPlaceHolder && (
          <div
            className={`w-0 overflow-hidden flex justify-between py-3 rounded-t-xl`}
          >
            <button className={`text-red-600`} onClick={onCancel}>
              "0"
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}
