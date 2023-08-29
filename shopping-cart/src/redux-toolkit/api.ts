import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { Product } from "../types";

export interface CustomError {
  data: {
    message: string;
  };
  status: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/brankostancevic/products/",
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError>,
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
