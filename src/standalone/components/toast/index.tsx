/**
 * Toast Component
 * TODO animation
 * @author: qinyuhangxiaoxiang@gmail.com
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ToastProps {
  title: string;

  // in ms
  duration?: number;
}

export class Toast extends React.PureComponent<ToastProps> {
  render() {
    const { title } = this.props;
    return (
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2
        rounded-lg backdrop-blur-md
        -translate-y-1/2 dark:bg-gray-300 dark:text-gray-800 p-5 `}
        style={{
          zIndex: `${Math.floor(Date.now() / 1000 / 60)}`,
        }}
      >
        {title}
      </div>
    );
  }
}

export function showToast(p: ToastProps) {
  const container = document.createElement("div");
  container.id = `toast-${Date.now()}`;
  document.body.appendChild(container);

  ReactDOM.render(<Toast {...p} />, container);

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  };

  setTimeout(unmount, p.duration || 1500);
}
