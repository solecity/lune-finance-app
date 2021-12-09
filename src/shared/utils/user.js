export const getLoggedUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    throw error;
  }
};

export const setLoggedUser = (user) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

export const clearLoggedUser = () => {
  try {
    return localStorage.removeItem("user");
  } catch (error) {
    throw error;
  }
};
