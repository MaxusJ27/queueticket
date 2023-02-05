import { configureStore } from '@reduxjs/toolkit'

import countersReducer from '../counters/counterSlice'
import currentReducer from '../counters/currentSlice'

export default configureStore({
  reducer: {
    counters: countersReducer,
    current: currentReducer,
  }
})