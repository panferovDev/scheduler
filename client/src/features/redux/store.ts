import { configureStore, combineReducers } from '@reduxjs/toolkit';
import groupSlice from '../slices/groupSlice';
import notifySlice from '../slices/notifySlice';
import confirmModalSlise from '../slices/ConfirmModalSlise';
import directionSlice from '../slices/directionSlice';

const rootReducer = combineReducers({
  groups: groupSlice,
  notify: notifySlice,
  confirm: confirmModalSlise,
  directions: directionSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
