import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IDate} from '@interfaces/IPlace';

export const accuweatherApi = createApi({
  reducerPath: 'accuweather/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wft-geo-db.p.rapidapi.com/v1',
  }),
  endpoints: (build) => ({
    searchCity: build.query<IDate[], string>({
      query: (cityName: string) => ({
        url: `geo/cities`,
        params: {
          namePrefix: cityName,
        },
        headers: {
          'X-RapidAPI-Key': 'c15fa3545emsha363e684e749560p19a2d8jsn0959c117a49a',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }),
      transformResponse: (response: { data: IDate[] }) => response.data,
    }),
  }),
});

export const { useSearchCityQuery } = accuweatherApi;
