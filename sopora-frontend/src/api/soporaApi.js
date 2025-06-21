import axios from "axios";

const BASE_URL = "https://sopora-backend.onrender.com/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

// Intercept requests to add token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const fetchSOPList = async () => (await api.get("/sops/")).data;
export const fetchSOP = async (id) => (await api.get(`/sops/${id}`)).data;
export const createSOP = async (payload) => (await api.post("/sops/", payload)).data;
export const assignTraining = async (payload) => (await api.post("/trainings/", payload)).data;
export const loginUser = async (payload) => (await api.post("/auth/login", payload)).data;
export const registerUser = async (payload) => (await api.post("/auth/register", payload)).data;

export default api;
