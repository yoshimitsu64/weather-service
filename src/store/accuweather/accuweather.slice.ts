import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  city: string | null;
}

const initialState: IInitialState = {
  city: null,
};

const accuWeatherSlice = createSlice({
  name: 'accuweather/slice',
  initialState: initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export default accuWeatherSlice.reducer;
export const { setCity } = accuWeatherSlice.actions;
