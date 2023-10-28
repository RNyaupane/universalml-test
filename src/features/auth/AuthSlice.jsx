import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./AuthService";


const getAccessFromLocalStorage = localStorage.getItem('access_token') ? JSON.parse(localStorage.getItem('access_token')) : null
const getRefreshFromLocalStorage = localStorage.getItem('refresh_token') ? JSON.parse(localStorage.getItem('refresh_token')) : null

const initialState = {
    access: getAccessFromLocalStorage,
    refresh: getRefreshFromLocalStorage,
    isError: false,
    isLoading: false,
    isAuthenticated: false,
    isSuccess: false,
    message: "",
}

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const resetState = createAction('Reset_all')


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.isAuthenticated = true;
                state.access = action.payload.access_token;
                state.refresh = action.payload.refresh_token;
                state.message = "Login Successfull"
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.access = null;
                state.refresh = null;
                state.message = action.payload.response.data.detail;
            })


            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.message = "Register Successfull Check Email"
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                if (action.payload.response.data.email && action.payload.response.data.username) {
                    state.message = action.payload.response.data.email[0];
                } else if (action.payload.response.data.email) {
                    state.message = action.payload.response.data.email[0];
                } else if (action.payload.response.data.username) {
                    state.message = action.payload.response.data.username[0];
                } else {
                    state.message = "An error occurred";
                }
            })
            .addCase(resetState, (state) => {
                state.message = ""; // Clear the message field
            });
    },
});

export default authSlice.reducer;