import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IEvent } from '@interfaces/IEvents';

interface IInitialState {
  events: IEvent[] | [];
}

const initialState: IInitialState = {
  events: [],
};

const calendarSlice = createSlice({
  name: 'calendar/slice',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEvent[]>) => {
      state.events = action.payload;
    },
  },
});

export default calendarSlice.reducer;
export const { setEvents } = calendarSlice.actions;
