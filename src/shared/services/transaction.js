import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/transactions", { params });

  return res ? res.data : { transactions: [], totalPages: 0 };
};

export default {
  getMany
};
