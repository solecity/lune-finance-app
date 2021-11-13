// api
import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/categories", { params });

  return res ? res.data : { categories: [], totalPages: 0 };
};

export default {
  getMany
};
