// base
import React from "react";

// libraries
import { HashRouter, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

// external components
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// custom components
import App from "./app";

// atoms
import { settingsState } from "shared/recoil/atoms";

// theme
import { GlobalStyles } from "styles/global";
import themes from "styles/theme";

// styles
import "simplebar/dist/simplebar.min.css";

const Root = () => {
  const settings = useRecoilValue(settingsState);

  const theme = themes[settings.theme];

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <HashRouter>
            <Route component={App} />
          </HashRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Root;
