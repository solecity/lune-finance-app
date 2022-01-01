// api
import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/shops", { params });

  return res ? res.data : { shops: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/shops", payload);

  return res.data;
};

const put = async (id, payload) => {
  const res = await api().put(`/shops/${id}`, payload);

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/shops/${id}`);

  return res.data;
};

export default {
  getMany,
  post,
  put,
  deleteOne
};
