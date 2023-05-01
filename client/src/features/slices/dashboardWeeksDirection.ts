import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { WeeksDirectionType } from '../../types/weeksDirectionType';

type InitilState = {
  data: WeeksDirectionType | null;
};

const initialState: InitilState = {
  data: null,
};

const dashboardWeeksDirectionSlice = createSlice({
  name: 'dashboardWeeksDirection',
  initialState,
  reducers: {
    setModalDirectionWeeks(state, action: PayloadAction<WeeksDirectionType | null>) {
      state.data = action.payload;
    },
  },
});

export default dashboardWeeksDirectionSlice.reducer;
export const { setModalDirectionWeeks } = dashboardWeeksDirectionSlice.actions;
