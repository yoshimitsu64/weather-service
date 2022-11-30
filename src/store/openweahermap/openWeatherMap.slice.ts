import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';

interface IInitialState {
  weather: IOpenweathermap | null;
}

const initialState: IInitialState = {
  weather: null,
};

const openWeatherMapSlice = createSlice({
  name: 'openweathermap',
  initialState,
  reducers: {
    setOpenWeatherMap: (state, action: PayloadAction<IOpenweathermap>) => {
      state.weather = action.payload;
    },
  },
});

export default openWeatherMapSlice.reducer;
export const { setOpenWeatherMap } = openWeatherMapSlice.actions;
