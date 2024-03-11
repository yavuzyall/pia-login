import axios from "axios";
import emitter from "../utils/eventEmitter";

const api = axios.create({
  baseURL: "https://dummyjson.com/auth",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  
  emitter.emit("loading", true);
  return config;

}, error => {
    emitter.emit("loading", false);
    return Promise.reject(error);
});


api.interceptors.response.use(response => {
    emitter.emit("loading", false);
    return response;
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    emitter.emit("loading", false);
    return Promise.reject(error);
});

export default api;