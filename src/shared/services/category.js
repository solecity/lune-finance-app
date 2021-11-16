// api
import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/categories", { params });

  return res ? res.data : { categories: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/categories", payload);

  return res.data;
};

const put = async (id, payload) => {
  const res = await api().put(`/categories/${id}`, payload);

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/categories/${id}`);

  return res.data;
};

export default {
  getMany,
  post,
  put,
  deleteOne
};
