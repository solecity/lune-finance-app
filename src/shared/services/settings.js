// libraries
import api from "./api";

const get = async () => {
  const res = await api().get("/settings");

  return res.data;
};

const patch = async (payload) => {
  console.log({ payload });
  const res = await api().patch("/settings", payload);

  return res.data;
};

export default { get, patch };
