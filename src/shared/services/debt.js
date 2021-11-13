import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/debts", { params });

  return res ? res.data : { debts: [], totalPages: 0 };
};

export default {
  getMany
};
