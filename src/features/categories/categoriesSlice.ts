import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CategoriesState {
    categories: string[];
}

const initialState: CategoriesState = {
    categories: [],
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;