import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import * as utils from "./utils";
import "./less.less";
import "./scss.scss";

utils.local_storage;
export default function Component() {
  return (
    <div styleName="container">
      <h1 className="title">Example</h1>
      <p styleName="title">Sample text paragraph.</p>
      <p styleName="less">Sample text paragraph.</p>
      <p styleName="scss">Sample text paragraph.</p>
    </div>
  );
}

ReactDOM.render(<Component />, document.getElementById("root"));
