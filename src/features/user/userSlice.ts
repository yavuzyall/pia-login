import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../modals/User";
import { RootState } from "../../app/store";
import api from "../../services/axiosConfig";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await api.get<User>("/auth/me");
  return response.data;
});

type UserStoreType = {
  user: User | undefined;
};

const initialState: UserStoreType = {
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset(state) {
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state: UserStoreType, action) => {
      state.user = action.payload;
    });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
