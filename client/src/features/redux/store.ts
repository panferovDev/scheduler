import { configureStore, combineReducers } from '@reduxjs/toolkit';
import groupSlice from '../slices/groupSlice';
import notifySlice from '../slices/notifySlice';
import confirmModalSlise from '../slices/ConfirmModalSlise';

const rootReducer = combineReducers({
  groups: groupSlice,
  notify: notifySlice,
  confirm: confirmModalSlise,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
