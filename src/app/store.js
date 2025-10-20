import { userSlice } from "@/users/userSlice";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer
    }
})