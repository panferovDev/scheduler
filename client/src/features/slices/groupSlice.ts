import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { GroupType } from '../../types';

type InitilState = GroupType[];

const initialState: InitilState = [];

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  
});

export default groupSlice.reducer;
