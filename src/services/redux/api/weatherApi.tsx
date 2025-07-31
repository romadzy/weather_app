import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Weather'],
  endpoints: (builder) => ({
    getCityWeather: builder.query({
      query: ({ city, unit }) => `/weather?city=${city}&unit=${unit}`,
      providesTags: (result, error, arg) => [{ type: 'Weather', id: arg.city }],
    }),
    getCityHourly: builder.query({
      query: ({ city, unit }) => `/forecast?city=${city}&unit=${unit}`,
    }),
  }),
});

export const { useGetCityWeatherQuery, useGetCityHourlyQuery } = weatherApi;
