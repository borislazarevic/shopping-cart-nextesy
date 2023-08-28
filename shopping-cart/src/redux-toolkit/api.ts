import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/brankostancevic/products/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;