import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/accounts", { params });

  return res ? res.data : { accounts: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/accounts", payload);

  return res.data;
};

const put = async (id, payload) => {
  const res = await api().put(`/accounts/${id}`, payload);

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/accounts/${id}`);

  return res.data;
};

export default {
  getMany,
  post,
  put,
  deleteOne
};
