// libraries
import api from "./api";

const getTypeStats = async (params) => {
  const res = await api().get("/stats/type", { params });

  return res.data;
};

const getMonthlyStats = async (params) => {
  const res = await api().get("/stats/monthly", { params });

  return res.data;
};

const getCategoriesStats = async (params) => {
  const res = await api().get("/stats/category", { params });

  return res.data;
};

export default {
  getTypeStats,
  getMonthlyStats,
  getCategoriesStats
};
