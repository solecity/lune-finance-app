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
import { GlobalStyles, Light, Dark } from "styles/theme";

const Root = () => {
  const settings = useRecoilValue(settingsState);

  const isDarkTheme = settings.theme === "dark";

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={isDarkTheme ? Dark : Light}>
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
