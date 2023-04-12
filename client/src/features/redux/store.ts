import { configureStore, combineReducers } from '@reduxjs/toolkit';
import groupSlice from '../slices/groupSlice';

const rootReducer = combineReducers({
  group: groupSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;