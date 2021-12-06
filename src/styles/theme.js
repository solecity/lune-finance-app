const general = {
  error: "rgba(208, 86, 37, 1)",
  white: "rgba(255, 255, 255, 1)",
  black: "rgba(28, 28, 28, 1)",
  grey: "rgba(213, 217, 219, 1)",
  darkGrey: "rgba(160, 168, 172, 1)",
  green: "rgba(139, 186, 93, 1)",
  red: "rgba(217, 74, 74, 1)",
  yellow: "rgba(221, 181, 61, 1)",
  blue: "rgba(63, 123, 166, 1)"
};

const Light = {
  colours: {
    background: "rgba(244, 244, 244, 1)",
    cardBackground: "rgba(252, 252, 252, 1)",
    inputBackground: "rgba(252, 252, 252, 1)",
    primary: "rgba(42, 81, 115, 1)",
    secondary: "rgba(171, 195, 211, 1)",
    accent: "rgba(210, 220, 227, 1)",
    boxShadow: "rgba(43, 71, 75, 0.3)",
    mainText: "rgba(28, 28, 28, 1)",
    buttonText: "rgba(255, 255, 255, 1)",
    ...general
  }
};

const Dark = {
  colours: {
    background: "rgba(24, 40, 53, 1)",
    cardBackground: "rgba(33, 56, 74, 1)",
    inputBackground: "rgba(27, 51, 70, 1)",
    primary: "rgba(42, 81, 115, 1)",
    secondary: "rgba(159, 185, 202, 1)",
    accent: "rgba(221, 229, 234, 1)",
    boxShadow: "rgba(43, 71, 75, 0.3)",
    mainText: "rgba(255, 255, 255, 1)",
    buttonText: "rgba(255, 255, 255, 1)",
    ...general
  }
};

export { Light, Dark };
