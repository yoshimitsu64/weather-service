import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Result } from '@interfaces/IOpencage';

interface IInitialState {
  geolocation: Result | null;
  isLoading: boolean;
}

const initialState: IInitialState = {
  geolocation: null,
  isLoading: false,
};

const opencageSlice = createSlice({
  name: 'opencage/slice',
  initialState,
  reducers: {
    setGeolocation: (state, action: PayloadAction<Result>) => {
      state.geolocation = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default opencageSlice.reducer;
export const { setGeolocation, setIsLoading } = opencageSlice.actions;
