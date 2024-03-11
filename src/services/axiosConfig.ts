import axios from "axios";
import { store } from '../app/store';
import { setLoading } from "../features/loading/loadingSlice";

const api = axios.create({
  baseURL: "https://dummyjson.com/auth",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  
  store.dispatch(setLoading(true));
  return config;

}, error => {
    store.dispatch(setLoading(false));
    return Promise.reject(error);
});


api.interceptors.response.use(response => {
    store.dispatch(setLoading(false));
    return response;
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    store.dispatch(setLoading(false));
    return Promise.reject(error);
});

export default api;