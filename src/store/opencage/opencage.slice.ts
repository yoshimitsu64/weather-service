import {Result} from '@interfaces/IOpencage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  geolocation: Result | null;
}

const initialState: IInitialState = {
  geolocation: null,
};

const opencageSlice = createSlice({
  name: 'opencage/slice',
  initialState,
  reducers: {
    setGeolocation: (state, action: PayloadAction<Result>) => {
      state.geolocation = action.payload;
    },
  },
});

export default opencageSlice.reducer;
export const { setGeolocation } = opencageSlice.actions;
