import { createSlice } from "@reduxjs/toolkit"
export const userSlice = createSlice({
   name : 'userSlice',
   initialState:{
    users:[]
   },

   reducers:{
    setUser: (state, action) =>{

    }
   }
})

export const {setUser} = userSlice;