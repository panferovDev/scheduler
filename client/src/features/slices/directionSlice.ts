import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { DirectionType } from '../../types';
import { addDirectionThunk, delDirectionThunk } from '../apiThunk/directionsThunks';

const initialState: DirectionType[] = [];

const directionSlice = createSlice({
  name: 'direction',
  initialState,
  reducers: {
    addDirectionAction(state, action: PayloadAction<DirectionType>) {
      state.push(action.payload);
    },
    addDirectionsAction(state, action: PayloadAction<DirectionType[]>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addDirectionThunk.fulfilled, (state, action) => {
      if (action.payload.created) {
        state.push(action.payload.direction);
      }
    });
    builder.addCase(delDirectionThunk.fulfilled, (state, action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    });
  },
});

export default directionSlice.reducer;
export const { addDirectionAction, addDirectionsAction } = directionSlice.actions;
