// api
import userService from "shared/services/user";

// utils
import { setLoggedUser } from "shared/utils/user";

export const saveUser = async () => {
  try {
    const { data } = await userService.me();

    if (data) {
      setLoggedUser(data.user);

      return data.user;
    }
  } catch (error) {
    throw error;
  }
};
