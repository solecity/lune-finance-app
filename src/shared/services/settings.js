// libraries
import api from "./api";

const getDefault = async () => {
  const res = await api().get("/settings");

  return res.data;
};

const getOne = async (id) => {
  const res = await api().get(`/settings/${id}`);

  return res.data;
};

const post = async (id) => {
  const res = await api().post(`/settings/${id}`);

  return res.data;
};

const patch = async (id, payload) => {
  const res = await api().patch(`/settings/${id}`, payload);

  return res.data;
};

export default { getDefault, getOne, post, patch };
