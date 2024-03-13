import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface ProductsState {
    [key: string]: Product[];
}

const initialState: ProductsState = {};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<{ category: string, products: Product[] }>) => {
            const { category, products } = action.payload;
            state[category] = products;
        }
    }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
