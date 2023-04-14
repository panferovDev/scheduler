import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { GroupType } from '../../types';
import { createGroupThunk, delGroupThunk, fetchGroups } from '../apiThunk';

type InitilState = GroupType[];
type DeteleteGroup = {
  id: string
}

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

   builder.addCase(delGroupThunk.fulfilled, (state, action: PayloadAction<number>) => state.filter(el => el.id !== action.payload))
    
  },
});

export default groupSlice.reducer;
