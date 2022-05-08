// libraries
import api from "./api";

const signIn = async (payload) => {
  const res = await api().post("/auth/sign-in", payload);

  return res ? res.data : {};
};

const signUp = async (payload) => {
  const res = await api().post("/auth/sign-up", payload);

  return res ? res.data : {};
};

export default { signIn, signUp };
