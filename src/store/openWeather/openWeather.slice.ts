import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOpenweathermap } from '@interfaces/IOpenweathermap';

interface IInitialState {
  weather: IOpenweathermap | null;
}

const initialState: IInitialState = {
  weather: null,
};

const openWeatherSlice = createSlice({
  name: 'openweathermap',
  initialState,
  reducers: {
    setOpenWeather: (state, action: PayloadAction<IOpenweathermap>) => {
      state.weather = action.payload;
    },
  },
});

export default openWeatherSlice.reducer;
export const { setOpenWeather } = openWeatherSlice.actions;
