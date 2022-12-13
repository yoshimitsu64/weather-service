import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOpenweathermap } from '@interfaces/IOpenweathermap';

interface IInitialState {
  weather: IOpenweathermap | null;
  error: null | boolean;
}

const initialState: IInitialState = {
  weather: null,
  error: null,
};

const openWeatherSlice = createSlice({
  name: 'openweathermap',
  initialState,
  reducers: {
    setOpenWeather: (state, action: PayloadAction<IOpenweathermap>) => {
      state.weather = action.payload;
    },
    setOpenCageError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export default openWeatherSlice.reducer;
export const { setOpenWeather, setOpenCageError } = openWeatherSlice.actions;
