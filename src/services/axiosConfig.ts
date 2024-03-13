import axios from "axios";
import { store } from '../app/store';
import { addActiveRequest, removeActiveRequest, setLoading, setRequestCount } from "../features/loading/loadingSlice";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.interceptors.request.use((config) => {
  const id = config.url || 'unknown';
  const loadingMessage = config.headers?.loadingMessage;

  
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  
  store.dispatch(setRequestCount(1));
  
  if (loadingMessage) {
    store.dispatch(addActiveRequest({ id, description: loadingMessage }));
  } else{
    store.dispatch(addActiveRequest({ id, description: "Yükleniyor..." }));
  }
  return config;

}, error => {
    const id = error.config.url || 'unknown';
    store.dispatch(setRequestCount(-1));
    store.dispatch(removeActiveRequest(id));
    return Promise.reject(error);
});


api.interceptors.response.use(response => {
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