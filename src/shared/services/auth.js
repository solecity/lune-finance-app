// libraries
import api from "./api";

const signIn = async (payload) => {
  const res = await api().post("/auth/signin", payload);

  return res ? res.data : {};
};

export default { signIn };
