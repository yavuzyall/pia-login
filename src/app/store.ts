import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from '../features/loading/loadingSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import productReducer from '../features/products/productsSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        categories: categoriesReducer,
        products: productReducer,
        user: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;