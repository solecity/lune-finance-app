// api
import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/recipients", { params });

  return res ? res.data : { recipients: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/recipients", payload);

  return res.data;
};

const put = async (id, payload) => {
  const res = await api().put(`/recipients/${id}`, payload);

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/recipients/${id}`);

  return res.data;
};

export default {
  getMany,
  post,
  put,
  deleteOne
};
