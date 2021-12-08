const general = {
  border: "#d2dce3",
  disabled: "#d5d9db",
  label: "#a0a8ac",
  error: "#d95522",
  white: "#ffffff",
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
    selectedButton: "#f4f4f4",
    mainText: "#1c1c1c",
    secondaryText: "#f4f4f4",
    buttonText: "#f4f4f4",
    divider: "#d5d9db",
    ...general
  }
};

const Dark = {
  colours: {
    background: "#1e1f23;",
    secondaryBackground: "#292E32",
    primary: "#E1AE21",
    secondary: "#5F6D74",
    accent: "#C25F3E",
    boxShadow: "#000000",
    selectedButton: "#1e1f23",
    mainText: "#f3f0ea",
    secondaryText: "#1c1c1c",
    buttonText: "#1c1c1c",
    divider: "#3D4348",
    ...general
  }
};

export { Light, Dark };
