import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ISelectedServices} from "@interfaces/ISelectedServices";

const initialState : ISelectedServices = {
  service: 'OpenWeatherMap',
};

const selectedServiceSlice = createSlice({
  name: 'selectedService/slice',
  initialState,
  reducers: {
    setSelectedService: (state, action: PayloadAction<ISelectedServices['service']>) => {
      state.service = action.payload;
    },
  },
});

export default selectedServiceSlice.reducer;
export const { setSelectedService } = selectedServiceSlice.actions;
