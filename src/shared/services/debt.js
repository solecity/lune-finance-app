import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/debts", { params });

  return res ? res.data : { debts: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/debts", payload);

  return res.data;
};

const put = async (id, payload) => {
  const res = await api().put(`/debts/${id}`, payload);

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/debts/${id}`);

  return res.data;
};

export default {
  getMany,
  post,
  put,
  deleteOne
};
