// api
import authService from "shared/services/auth";

// utils
import { setJWT, clearJWT } from "shared/utils/jwt";
import { clearLoggedUser } from "shared/utils/user";

export const signIn = async (payload) => {
  try {
    const { data, message } = await authService.signIn(payload);

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
  } catch (error) {
    console.log("eeee");
    throw error;
  }
};

export const signOut = () => {
  clearJWT();
  clearLoggedUser();
};
