import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/AuthSlice'
import aiAppReducer from '../features/aiApp/AiAppSlice'

const store = configureStore({
    reducer: {
        auth:authReducer,
        aiapp:aiAppReducer,
    }
})

export default store;