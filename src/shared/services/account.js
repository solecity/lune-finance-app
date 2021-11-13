import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/accounts", { params });

  return res ? res.data : { accounts: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/accounts", payload);

  return res.data;
};

export default {
  getMany,
  post
};
