// base
import React, { useState, useEffect } from "react";

// libraries
import { useRecoilState } from "recoil";

// api
import UserService from "shared/services/user";
import SettingsService from "shared/services/settings";

// external components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import { Sun } from "@styled-icons/boxicons-solid/Sun";
import { Moon } from "@styled-icons/boxicons-solid/Moon";

// custom components
import { Header, InputInfo, ActionButton } from "shared/components";

// styled components
import {
  StyledGrid,
  StyledPaper,
  StyledSelect,
  StyledLabel,
  StyledIcon,
  StyledSwitch
} from "./styles";

// utils
import { getLoggedUser } from "shared/utils/user";
import { getUserSettings, setUserSettings } from "shared/utils/settings";

// atoms
import { settingsState } from "shared/recoil/atoms";

// constants
import { CONSTANTS } from "constants/general";

const Settings = () => {
  const [settings, setSettings] = useRecoilState(settingsState);

  const [user, setUser] = useState({});
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState(settings.theme === CONSTANTS.LIGHT);

  const getUser = () => {
    const loggedUser = getLoggedUser();

    setUser(loggedUser);
  };

  const getSettings = () => {
    const userSettings = getUserSettings();

    setSettings(userSettings);
    setUserSettings(userSettings);
  };

  const handleTheme = async (event) => {
    const value = event.target.checked ? CONSTANTS.LIGHT : CONSTANTS.DARK;

    setTheme(event.target.checked);
    setSettings({ ...settings, theme: value });

    const { data } = await SettingsService.patch(user._id, { theme: value });

    setUserSettings(data.settings);
  };

  useEffect(() => {
    getUser();
    getSettings();
  }, []);

  return (
    <Container maxWidth="xl">
      <Header title={"Settings"} />
      <Grid container spacing={1}>
        <StyledGrid item xs={12} md={6}>
          <StyledPaper>
            <Grid container spacing={1} alignItems="flex-end">
              <StyledGrid item xs={10}>
                <InputInfo label="Name" name={user.name} />
              </StyledGrid>
              <StyledGrid item xs={2}>
                <ActionButton text="Edit" action={() => {}} />
              </StyledGrid>
              <StyledGrid item xs={10}>
                <InputInfo label="Email" name={user.email} />
              </StyledGrid>
              <StyledGrid item xs={2}>
                <ActionButton text="Edit" action={() => {}} />
              </StyledGrid>
              <StyledGrid item xs={10}>
                <InputInfo label="Password" name="****" />
              </StyledGrid>
              <StyledGrid item xs={2}>
                <ActionButton text="Change" action={() => {}} />
              </StyledGrid>
            </Grid>
          </StyledPaper>
        </StyledGrid>
        <StyledGrid item xs={12} md={6}>
          <StyledPaper>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <StyledLabel>Language</StyledLabel>
                <Select
                  variant="outlined"
                  input={<StyledSelect />}
                  name="language"
                  value={language}
                >
                  <MenuItem value="en">En</MenuItem>
                  <MenuItem value="pt">Pt</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid item xs={12}>
                  <StyledLabel>Theme</StyledLabel>
                </Grid>
                <StyledSwitch container>
                  <StyledIcon item className={theme ? "" : "selected"}>
                    <Moon />
                  </StyledIcon>
                  <Switch
                    size="small"
                    checked={console.log(theme)}
                    onChange={handleTheme}
                  />
                  <StyledIcon item className={theme ? "selected" : ""}>
                    <Sun />
                  </StyledIcon>
                </StyledSwitch>
              </Grid>
            </Grid>
          </StyledPaper>
        </StyledGrid>
      </Grid>
    </Container>
  );
};

Settings.propTypes = {};

export default Settings;
