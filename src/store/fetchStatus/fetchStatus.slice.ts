import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  error: boolean;
}

const initialState: IInitialState = {
  error: false,
};

const fetchStatusSlice = createSlice({
  name: 'fetchStatus/slice',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export default fetchStatusSlice.reducer;
export const { setError } = fetchStatusSlice.actions;
