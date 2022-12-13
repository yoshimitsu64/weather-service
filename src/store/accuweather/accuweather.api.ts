import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IDate } from '@interfaces/IPlace';

import { accuWeatherApiUrl } from '@constants/apiUrls';

export const accuweatherApi = createApi({
  reducerPath: 'accuweather/api',
  baseQuery: fetchBaseQuery({
    baseUrl: accuWeatherApiUrl,
  }),
  endpoints: (build) => ({
    searchCity: build.query<IDate[], string>({
      query: (cityName: string) => ({
        url: `geo/cities`,
        params: {
          namePrefix: cityName,
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_ACCUWEATHER_KEY,
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      }),
      transformResponse: (response: { data: IDate[] }) => response.data,
    }),
  }),
});

export const { useSearchCityQuery } = accuweatherApi;
