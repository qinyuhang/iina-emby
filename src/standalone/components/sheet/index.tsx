/**
 * 从下面向上弹起的Sheet
 * 他还可以 scale 向下 参考App Store点击个人头像
 */
import * as React from "react";

export interface SheetProps {
  show: boolean;

  scaleToBeCoverd?: boolean;

  /**
   * sheet 距离页面顶部的距离
   */
  top?: number;

  /**
   * 会体现在 data-name 和 id 上
   */
  name: string;
}
export interface SheetState {
  didMount: boolean;
  mountChildren: boolean;
}

export class Sheet extends React.Component<SheetProps, SheetState> {
  state: SheetState = {
    didMount: false,
    mountChildren: false,
  };

  componentDidMount(): void {
    this.setState({
      didMount: this.props.show,
      mountChildren: this.props.show,
    });
  }

  componentDidUpdate(
    prevProps: Readonly<SheetProps>,
    prevState: Readonly<SheetState>,
    snapshot?: any
  ): void {
    if (this.props.scaleToBeCoverd !== prevProps.scaleToBeCoverd) {
    }
    if (this.props.show !== prevProps.show) {
      const action = this.props.show;
      let firstState: Partial<SheetState> = {};
      let secondState: Partial<SheetState> = {};

      if (action) {
        firstState = {
          mountChildren: action,
        };
        secondState = {
          didMount: action,
        };
      } else {
        firstState = {
          didMount: action,
        };
        secondState = {
          mountChildren: action,
        };
      }

      // @ts-ignore
      this.setState(firstState, () => {
        setTimeout(() => {
          // @ts-ignore
          this.setState(secondState);
        }, 100);
      });
    }
  }

  hide = () => {
    return new Promise<void>((r) => {
      this.setState(
        {
          didMount: false,
        },
        () => {
          setTimeout(() => {
            r();
            this.setState({
              mountChildren: false,
            });
          }, 100);
        }
      );
    });
  };

  show = () => {
    return new Promise<void>((r) => {
      this.setState(
        {
          didMount: true,
          mountChildren: true,
        },
        r
      );
    });
  };

  render() {
    const {
      children,
      show,
      name = `sheet-${Date.now()}`,
      top = 0,
      scaleToBeCoverd = false,
    } = this.props;
    const { didMount, mountChildren } = this.state;
    return (
      <div
        id={name}
        data-name={name}
        className={`transition-all ease-in-out h-screen w-screen absolute ${
            ""
        } rounded-xl overflow-y-scroll dark:bg-gray-800 bg-gray-100`}
        style={{
          top: `${didMount ? top + "px" : "100%"}`,
          zIndex: `${Math.floor(Date.now() / 1000 / 60 / 24)}`,
          transform: `scale3d(${scaleToBeCoverd ? 0.9 : 1},${scaleToBeCoverd ? 0.9 : 1},1)`,
        }}
      >
        {mountChildren ? children : null}
      </div>
    );
  }
}
