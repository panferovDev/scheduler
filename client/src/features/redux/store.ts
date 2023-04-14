import { configureStore, combineReducers } from '@reduxjs/toolkit';
import groupSlice from '../slices/groupSlice';
import notifySlice from '../slices/notifySlice';

const rootReducer = combineReducers({
  groups: groupSlice,
  notify: notifySlice
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
