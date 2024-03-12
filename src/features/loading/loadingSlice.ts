import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoadingState {
    isLoading: boolean;
    requestCount: number;
    activeRequests: Record<string, string>;
}

const initialState: LoadingState = {
    isLoading: false,
    requestCount: 0,
    activeRequests: {},
}

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setRequestCount: (state, action: PayloadAction<number>) => {
            const requestCount = state.requestCount + action.payload;
            state.requestCount = requestCount;
            if (requestCount === 0) {
              state.isLoading = false;
            } else {
              state.isLoading = true;
            }
        },
        addActiveRequest: (state, action: PayloadAction< {id: string, description: string} >) => {
            const { id, description } = action.payload;
            state.activeRequests[id] = description;
            state.isLoading = true;
        },
        removeActiveRequest: (state, action: PayloadAction<string>) => {
          delete state.activeRequests[action.payload];
          if (Object.keys(state.activeRequests).length === 0) {
            state.isLoading = false;
          }
        }
    },
});

export const { setLoading, setRequestCount, addActiveRequest, removeActiveRequest } = loadingSlice.actions;

export default loadingSlice.reducer;