import axios from "axios";
import { store } from '../app/store';
import { addActiveRequest, removeActiveRequest, setLoading, setRequestCount } from "../features/loading/loadingSlice";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.interceptors.request.use((config) => {
  console.log("request config:", config);
  const id = config.url || 'unknown';
  let description = "Yükleniyor...";
  if (config.url?.includes("products/category")) {
    description = "Kategoriler listeleniyor...";
  } else if (config.url?.includes("products/1")) {
    description = "Ürün listeleniyor...";
  } else if (config.url?.includes("products")) {
    description = "Ürünler listeleniyor...";
  }
  
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  
  store.dispatch(setRequestCount(1));
  store.dispatch(addActiveRequest({ id, description }));
  return config;

}, error => {
    const id = error.config.url || 'unknown';
    store.dispatch(setRequestCount(-1));
    store.dispatch(removeActiveRequest(id));
    return Promise.reject(error);
});


api.interceptors.response.use(response => {
    console.log("response (response):", response);
    const id = response.config.url || 'unknown';

    store.dispatch(setRequestCount(-1));
    store.dispatch(removeActiveRequest(id));
    return response;
}, error => {
    const id = error.config && error.config.url ? error.config.url : 'unknown';
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    store.dispatch(setRequestCount(-1));
    store.dispatch(removeActiveRequest(id));
    return Promise.reject(error);
});

export default api;