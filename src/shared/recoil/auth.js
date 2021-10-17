// api
import authService from "shared/services/auth";

// utils
import { setJWT, clearJWT } from "shared/utils/jwt";

export const signIn = async (data) => {
  try {
    const res = await authService.signIn(data);

    const { token, user } = res.data;

    if (token && user) {
      setJWT(token);

      return { success: true };
    } else return res;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => clearJWT();
