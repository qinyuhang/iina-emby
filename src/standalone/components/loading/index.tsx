/**
 * Loading Component
 * TODO animation
 * @author: qinyuhangxiaoxiang@gmail.com
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

export interface LoadingProps {
  title?: string;
  duration?: number;
}
export class Loading extends React.PureComponent<LoadingProps> {
  render() {
    const { title = "loading" } = this.props;
    return (
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2
      rounded-lg backdrop-blur-md
      -translate-y-1/2 dark:bg-gray-300 dark:text-gray-800 p-5 `}
        style={{
          zIndex: `${Math.floor(Date.now() / 1000 / 60)}`,
        }}
      >
        <h1 className={`text-lg`}>{title}</h1>
      </div>
    );
  }
}

export const loadingClassName = "emby-loading";
export function showLoading(p: LoadingProps) {
  const container = document.createElement("div");
  container.id = `Loading-${Date.now()}`;
  container.classList.add(loadingClassName);
  document.body.appendChild(container);

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  };

  ReactDOM.render(<Loading {...p} />, container);

  if (p.duration) {
    setTimeout(() => {
      unmount();
    }, p.duration);
  }
}

/**
 * this function hide all loadings
 */
export function hideLoading() {
  Array.from(document.querySelectorAll(`.${loadingClassName}`)).forEach(
    (el) => {
      ReactDOM.unmountComponentAtNode(el);
      document.body.removeChild(el);
    }
  );
}

// @ts-ignore
window.L = {
  showLoading,
  hideLoading,
};
