// base
import React from "react";

// libraries
import { HashRouter, Route } from "react-router-dom";

// external components
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// custom components
import App from "./app";

const Root = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <HashRouter>
        <Route component={App} />
      </HashRouter>
    </LocalizationProvider>
  );
};

export default Root;
