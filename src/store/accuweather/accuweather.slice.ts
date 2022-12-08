import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  city: {
    city: string | null;
    lat: number | null;
    lon: number | null;
  };
}

const initialState: IInitialState = {
  city: {
    city: null,
    lat: null,
    lon: null,
  },
};

const accuWeatherSlice = createSlice({
  name: 'accuweather/slice',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = {
        city: action.payload.city,
        lat: action.payload.latitude,
        lon: action.payload.longitude,
      };
    },
  },
});

export default accuWeatherSlice.reducer;
export const { setCity } = accuWeatherSlice.actions;
