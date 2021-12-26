import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/goals", { params });

  return res ? res.data : { goals: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/goals", payload);

  return res.data;
};

const patch = async (id, payload) => {
  const res = await api().patch(`/goals/${id}`, payload);

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/goals/${id}`);

  return res.data;
};

export default {
  getMany,
  post,
  patch,
  deleteOne
};
