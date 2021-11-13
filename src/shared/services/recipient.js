// api
import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/recipients", { params });

  return res ? res.data : { recipients: [], totalPages: 0 };
};

export default {
  getMany
};
