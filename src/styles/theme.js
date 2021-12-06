const general = {
  border: "#d2dce3",
  label: "#a0a8ac",
  buttonText: "#f4f4f4",
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
    mainText: "#1c1c1c",
    disabled: "#d5d9db",
    ...general
  }
};

const Dark = {
  colours: {
    background: "#182835",
    secondaryBackground: "#274053",
    primary: "#3f8aa2",
    secondary: "#9fb9ca",
    accent: "#dde5ea",
    boxShadow: "#414748",
    mainText: "#f4f4f4",
    disabled: "#32444d",
    ...general
  }
};

export { Light, Dark };
