import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/goals", { params });

  return res ? res.data : { goals: [], totalPages: 0 };
};

export default {
  getMany
};
