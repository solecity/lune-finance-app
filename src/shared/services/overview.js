// libraries
import api from "./api";

const getTypeStats = async () => {
  const res = await api().get("/transactions/stats/types");

  return res.data;
};

const getDateStats = async (params) => {
  const res = await api().get("/transactions/stats/date", { params });

  return res.data;
};

export default { getTypeStats, getDateStats };
