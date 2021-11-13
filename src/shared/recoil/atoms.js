// libraries
import { atom } from "recoil";

const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false
});

const settingsState = atom({
  key: "settingsState",
  default: {
    currency: "EUR",
    currencySymbol: "€",
    language: "EN",
    theme: "light"
  }
});

export { isLoggedIn, settingsState };
