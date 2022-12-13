import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IVisualCrossing } from '@interfaces/IVisualCrossing';

interface IInitialState {
  weather: IVisualCrossing | null;
  error: null | boolean;
}

const initialState: IInitialState = {
  weather: null,
  error: null,
};

const visualCrossingSlice = createSlice({
  name: 'visualCrossing',
  initialState,
  reducers: {
    setVisualCrossing: (state, action: PayloadAction<IVisualCrossing>) => {
      state.weather = action.payload;
    },
    setVisualCrossingError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export default visualCrossingSlice.reducer;
export const { setVisualCrossing, setVisualCrossingError } = visualCrossingSlice.actions;
