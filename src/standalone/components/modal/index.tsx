/**
 * Modal Component
 * TODO animation
 * @author: qinyuhangxiaoxiang@gmail.com
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ModalProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}
export class Modal extends React.PureComponent<ModalProps> {
  render() {
    const {
      confirmText = "Confirm",
      cancelText = "Cancel",
      title,
    } = this.props;
    return (
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2
      rounded-lg backdrop-blur-md
      -translate-y-1/2 dark:bg-gray-300 dark:text-gray-800 p-5 `}
        style={{
          zIndex: `${Math.floor(Date.now() / 1000 / 60)}`,
        }}
      >
        <h1 className={`text-lg mb-4`}>{title}</h1>
        <div className={`flex items-center justify-between`}>
          <button onClick={this.props.onCancel}>{cancelText}</button>
          <button className={`text-red-500`} onClick={this.props.onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    );
  }
}

export function showModal(p: ModalProps) {
  const container = document.createElement("div");
  container.id = `modal-${Date.now()}`;
  document.body.appendChild(container);

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  };

  ReactDOM.render(
    <Modal
      {...p}
      onCancel={() => {
        p.onCancel();
        unmount();
      }}
      onConfirm={() => {
        p.onConfirm();
        unmount();
      }}
    />,
    container
  );
}
