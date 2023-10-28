import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import aiAppService from "./AiAppService";


const initialState = {
    apps:[],
    isError: false,
    isLoading: false,
    isAuthenticated:false,
    isSuccess: false,
    message: "",
}

export const resetState = createAction('Reset_all')

export const getAiApp = createAsyncThunk(
    'aiapp/get-app',
    async (thunkAPI) => {
        try {
            return await aiAppService.getAiApps();
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AiAppSlice = createSlice({
    name: "aiapp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAiApp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAiApp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.apps = action.payload;
            })
            .addCase(getAiApp.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState)
    },
})

export default AiAppSlice.reducer;