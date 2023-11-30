import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Currency } from '../pages/Home/Home';


export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: (build) => ({
    fetchCurrencyByCode: build.query<Currency[], string>({
      query: (code) => ({
        url: '',
        params: {
          json: 'json',
          valcode: code,
        }
      }),
    })
  })
})