// api
import authService from "shared/services/auth";

// utils
import { setJWT, clearJWT } from "shared/utils/jwt";

export const signIn = async (payload) => {
  try {
    const { data, message } = await authService.signIn(payload);

    if (data) {
      const { token, user } = data;

      if (token && user) {
        setJWT(token);

        return { success: true };
      }
    } else return message;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => clearJWT();
