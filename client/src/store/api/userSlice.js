
   import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

   const userApi = createApi({
     reducerPath: "user",
     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1000/api/users" }),
     tagTypes: ["users"],
     endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
              url: "/login",
              method: "POST",
              body: user,
            }),
            invalidatesTags:["users"]
          }),
          signup: builder.mutation({
            query: (user) => ({
              url: "/signup",
              method: "POST",
              body: user,
            }),
            invalidatesTags:["users"]
          }), 
     }),
   });
   export const { useLoginMutation,useSignupMutation} = userApi;
   
   export { userApi };
   