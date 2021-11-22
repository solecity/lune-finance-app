import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/transactions", { params });

  return res ? res.data : { transactions: [], totalPages: 0 };
};

const postInOutcome = async (payload) => {
  const res = await api().post("/transactions/inoutcome", payload);

  return res.data;
};

const postTransfer = async (payload) => {
  const res = await api().post("/transactions/transfer", payload);

  return res.data;
};

const putInOutcome = async (id, payload) => {
  const res = await api().put(`/transactions/inoutcome/${id}`, payload);

  return res.data;
};

const putTransfer = async (id, payload) => {
  const res = await api().put(`/transactions/transfer/${id}`, payload);

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/transactions/${id}`);

  return res.data;
};

export default {
  getMany,
  postInOutcome,
  postTransfer,
  putInOutcome,
  putTransfer,
  deleteOne
};
