import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type InitilState = {
  notify: { id: number; name: string; type: 'group' | 'student' } | null;
  students: number | null;
};

const initialState: InitilState = {
  notify: null,
  students: null,
};

const confirmModalSlice = createSlice({
  name: 'confirmModal',
  initialState,
  reducers: {
    setModalNotify(
      state,
      action: PayloadAction<{ id: number; name: string; type: 'group' | 'student' } | null>,
    ) {
      state.notify = action.payload;
    },

    setStudentsModal(state, action: PayloadAction<number | null>) {
      state.students = action.payload;
    },
  },
});

export default confirmModalSlice.reducer;
export const { setModalNotify, setStudentsModal } = confirmModalSlice.actions;
