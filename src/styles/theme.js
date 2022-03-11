// variables
import { lightTheme } from "./lightTheme.js";
import { darkTheme } from "./darkTheme.js";
import { general } from "./variables.js";

const light = {
  ...lightTheme,
  ...general
};

const dark = {
  ...darkTheme,
  ...general
};

const themes = { light, dark };

export default themes;
