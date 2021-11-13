// libraries
import api from "./api";

const getTypeStats = async () => {
  const res = await api().get("/transactions/stats/types");

  return res.data;
};

export default { getTypeStats };
