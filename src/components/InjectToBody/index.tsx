import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { isEmpty } from "../../utils/helpers";

export interface InjectToBodyProps extends React.HTMLProps<HTMLDivElement> {}

@observer
export default class InjectToBody extends React.Component<InjectToBodyProps> {
  el: HTMLDivElement;

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.className = props.className || "";
    if (!isEmpty(props.style)) {
      for (const key of Object.keys(props.style)) {
        this.el.style[key] = props.style[key];
      }
    }
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}