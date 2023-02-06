import { createSlice } from '@reduxjs/toolkit'
/*
Handles state change communication Management and Customer view
*/
const initialState = [
    {
        id: 1,
        curr_num: 'Online',
        active: false,
        online: true,
    },
    {
        id: 2,
        curr_num: 'Online',
        active: false,
        online: true,
    },
    {
        id: 3,
        curr_num: 'Online',
        active: false,
        online: true,
    },
    {
        id: 4,
        curr_num: 'Online',
        active: false,
        online: false,
    },

]
const counterSlice = createSlice({
    name: 'counters',
    initialState,
    // function is to update the active and online status of the counters 
    // then dispatch using the buttons in Management 
    reducers: {
        // to update data layer 
        setActive: (state, action) => {
            const { id } = action.payload;
            const existingCounter = state.find(counter => counter.id === id);
            if (existingCounter) {
                // existingCounter.curr_num = 'Available';
                existingCounter.active = true;
            }
        },
        setOnline: (state, action) => {
            const { id } = action.payload;
            const existingCounter = state.find(counter => counter.id === id);
            if (existingCounter) {
                existingCounter.online = !existingCounter.online;
            }
        },
        setNumber: (state, action) => {
            const { id, number } = action.payload;
            const existingCounter = state.find(counter => counter.id === id);
            if (existingCounter) {
                existingCounter.curr_num = number;
                existingCounter.active = false;
            }
        },
    }
})

export const { setActive, setOnline, setNumber } = counterSlice.actions;

export const selectActive = (state) => state.counters.active;
export const selectOnline = (state) => state.counters.online;
export const selectNumber = (state) => state.counters.curr_num;

export default counterSlice.reducer