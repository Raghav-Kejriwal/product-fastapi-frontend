import axios from "axios";

const API = axios.create({
  baseURL: "https://product-fastapi-d6m7.onrender.com/",
});

export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/product/${id}`);
export const createProduct = (data) => API.post("/product", data);
export const updateProduct = (id, data) => API.put(`/product/${id}`, data);
export const deleteProduct = (id) => API.delete(`/product/${id}`);
export const createSeller = (data) => API.post("/seller", data);
