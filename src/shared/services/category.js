// api
import api from "./api";

const getMany = async (params) => {
  const res = await api().get("/categories", { params });

  return res ? res.data : { categories: [], totalPages: 0 };
};

const post = async (payload) => {
  const res = await api().post("/categories", payload);

  return res.data;
};

const patch = async (id, payload) => {
  const res = await api().patch(`/categories/${id}`, payload);

  return res.data;
};

const patchSubCategories = async (id, payload) => {
  const res = await api().patch(`/categories/${id}/subcategory`, payload);

  return res.data;
};

const patchSubCategory = async (category, id, payload) => {
  const res = await api().patch(
    `/categories/${category}/subcategory/${id}`,
    payload
  );

  return res.data;
};

const deleteOne = async (id) => {
  const res = await api().delete(`/categories/${id}`);

  return res.data;
};

export default {
  getMany,
  post,
  patch,
  patchSubCategories,
  patchSubCategory,
  deleteOne
};
