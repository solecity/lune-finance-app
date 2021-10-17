// base
import React from "react";
import ReactDOM from "react-dom";

// libraries
import { RecoilRoot } from "recoil";

// config
import Root from "./config/root";
import ErrorBoundary from "./config/error";

// styles
import "./styles/index.css";

ReactDOM.render(
  <RecoilRoot>
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  </RecoilRoot>,
  document.getElementById("root")
);
