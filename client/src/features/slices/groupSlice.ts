import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { GroupType } from '../../types';
import { createGroupThunk, fetchGroups } from '../apiThunk';

type InitilState = GroupType[];

const initialState: InitilState = [];

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGroups.fulfilled,
      (state, action: PayloadAction<GroupType[]>) => action.payload,
    );
    builder.addCase(createGroupThunk.fulfilled, (state, action: PayloadAction<GroupType>) => {
      state.push(action.payload)
    }
    );
  },
});

export default groupSlice.reducer;
