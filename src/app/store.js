import { configureStore } from '@reduxjs/toolkit'

import countersReducer from '../counters/counterSlice'
import currentReducer from '../counters/currentSlice'
// configuring store for Redux states and actions
export default configureStore({
  reducer: {
    counters: countersReducer,
    current: currentReducer,
  }
})