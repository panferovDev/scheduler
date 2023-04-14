import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotify(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export default notifySlice.reducer;
export const { setNotify } = notifySlice.actions;
