// api
import authService from "shared/services/auth";

// utils
import { setJWT, clearJWT } from "shared/utils/jwt";
import { clearLoggedUser } from "shared/utils/user";

const auth = (data, message) => {
  if (data) {
    const { token, user } = data;

    if (token && user) {
      setJWT(token);

      return { success: true };
    }
  } else if (message) {
    return message;
  } else {
    return false;
  }
};

export const signIn = async (payload) => {
  try {
    const { data, message } = await authService.signIn(payload);

    return auth(data, message);
  } catch (error) {
    throw error;
  }
};

export const signUp = async (payload) => {
  try {
    const { data, message } = await authService.signUp(payload);

    return auth(data, message);
  } catch (error) {
    throw error;
  }
};

export const signOut = () => {
  clearJWT();
  clearLoggedUser();
};
