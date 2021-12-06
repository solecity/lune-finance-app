// libraries
import api from "./api";

const me = async (payload) => {
  const res = await api().get("/users/me", payload);

  return res.data;
};

export default { me };
