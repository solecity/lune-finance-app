// base
import React, { useEffect } from "react";

// libraries
import { HashRouter, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

// api
import SettingsService from "shared/services/settings";

// external components
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// custom components
import App from "./app";

// atoms
import { isLoggedIn, settingsState } from "shared/recoil/atoms";

// theme
import { GlobalStyles } from "styles/global";
import { Light, Dark } from "styles/theme";

// styles
import "simplebar/dist/simplebar.min.css";

const Root = () => {
  const loggedIn = useRecoilValue(isLoggedIn);
  const [settings, setSettings] = useRecoilState(settingsState);

  const isDarkTheme = settings.theme === "dark";

  const getSettings = async () => {
    const { data } = await SettingsService.get();

    setSettings(data.settings);
  };

  useEffect(() => {
    if (loggedIn) getSettings();
  }, [loggedIn]);

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
