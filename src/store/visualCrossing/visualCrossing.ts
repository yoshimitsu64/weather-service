import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IVisualCrossing} from "@interfaces/IVisualCrossing";

interface IInitialState {
    weather: IVisualCrossing | null;
}

const initialState : IInitialState = {
    weather: null
}

const visualCrossingSlice = createSlice({
    name:'visualCrossing',
    initialState,
    reducers: {
        setVisualCrossing:(state, action: PayloadAction<IVisualCrossing>) => {
            state.weather = action.payload;
        }
    }
})

export default visualCrossingSlice.reducer;
export const {setVisualCrossing} = visualCrossingSlice.actions
