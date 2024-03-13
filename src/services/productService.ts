import api from './axiosConfig';

export const fetchProductsByCategory = async (category: string) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data.products;
};
