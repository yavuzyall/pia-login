import { User } from "../modals/User";

const API_URL = 'https://dummyjson.com/auth/login';

async function login(username: string, password: string) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token);
        return data;
    } else {
        throw new Error(data.message);
    }
}

function logout() {
    localStorage.removeItem('token');
}

async function validateToken(token: string): Promise<User> {
    const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();
    if (response.ok) {
        return data;
    } else {
        throw new Error('Token is invalid');
    }
}


export default {
    login,
    logout,
    validateToken
};
