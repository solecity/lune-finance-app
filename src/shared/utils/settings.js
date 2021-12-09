export const getUserSettings = () => {
  try {
    return JSON.parse(localStorage.getItem("settings"));
  } catch (error) {
    throw error;
  }
};

export const setUserSettings = (settings) => {
  try {
    localStorage.setItem("settings", JSON.stringify(settings));
  } catch (error) {
    throw error;
  }
};
