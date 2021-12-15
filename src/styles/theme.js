const general = {
  disabled: "#d5d9db",
  label: "#a0a8ac",
  error: "#d95522",
  white: "#fcfcfc",
  black: "#1c1c1c",
  grey: "#d5d9db",
  darkGrey: "#a0a8ac",
  green: "#81b54e",
  red: "#e04343",
  yellow: "#ddb53d",
  blue: "#3f7ba6"
};

const Light = {
  colours: {
    background: "#f4f4f4",
    secondaryBackground: "#fcfcfc",
    primary: "#2a5173",
    secondary: "#abc3d3",
    accent: "#d2dce3",
    boxShadow: "#414748",
    selectedButton: "#fcfcfc",
    mainText: "#292a2b",
    secondaryText: "#fcfcfc",
    divider: "#d2dce3",
    ...general
  }
};

const Dark = {
  colours: {
    background: "#1e1f23;",
    secondaryBackground: "#292E32",
    primary: "#E1AE21",
    secondary: "#5F6D74",
    accent: "#8D9DA5",
    boxShadow: "#000000",
    selectedButton: "#292E32",
    mainText: "#fcfcfc",
    secondaryText: "#292a2b",
    accentText: "#4e5455",
    divider: "#3D4348",
    ...general
  }
};

export { Light, Dark };
