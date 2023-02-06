import { createSlice} from "@reduxjs/toolkit";
// handle state change of number between
const initialState = {
    currentNum: '',
}

const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        setCurrentNum: (state, action) => {
            const {currentNum} = action.payload;
            state.currentNum = currentNum;
        }

    }
})

export const {setCurrentNum} = currentSlice.actions;

export const selectCurrentNum = (state) => state.current.currentNum;
export default currentSlice.reducer