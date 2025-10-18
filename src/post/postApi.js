
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const postApi =  createApi({
reducerPath:'postApi',
  baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),

  endpoints:(builder)=>({
    getProduct:builder.query({
        query:()=>({
            url:'users',
            method:'GET'
        })
    }),

  })
});

export const {useGetProductQuery} = postApi;