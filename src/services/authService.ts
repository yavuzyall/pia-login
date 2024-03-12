import api from './axiosConfig';
import { User } from "../modals/User";

async function login(username: string, password: string) {
    const response = await api.post('auth/login', { username, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        return response.data;
    } else{
        throw new Error('Login failed');
    }
}

function logout() {
    localStorage.removeItem('token');
}

async function validateToken(token: string): Promise<User> {
    const response = await api.get('auth/me');
    if (response.data) {
        return response.data;
    } else {
        throw new Error('Token is invalid');
    }
}


export default {
    login,
    logout,
    validateToken
};
