import {combineReducers} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export default rootReducer;
