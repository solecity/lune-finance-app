import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/accounts", { params });

  return res ? res.data : { accounts: [], totalPages: 0 };
};

export default {
  getMany
};
