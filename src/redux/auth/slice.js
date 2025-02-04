import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";

const initialState = {
    user:{
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
}
const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.token = action.payload.token;
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.token = action.payload.token;
        })
        .addCase(logoutThunk.fulfilled, () => {
            return initialState;
        })
        .addCase(refreshThunk.fulfilled, (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshThunk.pending, (state, action) => {
            state.isRefreshing = true;
          })
          .addCase(refreshThunk.rejected, (state, action) => {
            state.isRefreshing = false;
          });
    },
});
export const authReducer = slice.reducer;