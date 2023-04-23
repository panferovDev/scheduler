import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { GroupType, StudentType } from '../../types';
import {
  addStudentsThunk,
  createGroupThunk,
  delGroupThunk,
  delStudentThunk,
  fetchGroups,
} from '../apiThunk';

type InitilState = GroupType[];

const initialState: InitilState = [];

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    deleteStudentAction(state, action: PayloadAction<number>) {
      state.forEach((group) => {
        group.students = group.students.filter((student) => student.id !== action.payload);
      });
    },
    addGroupAction(state, action: PayloadAction<GroupType>) {
      state.push(action.payload);
    },
    addGroupsAction(state, action: PayloadAction<GroupType[]>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchGroups.fulfilled,
      (state, action: PayloadAction<GroupType[]>) => action.payload,
    );

    builder.addCase(
      createGroupThunk.fulfilled,
      (state, action: PayloadAction<{ group: GroupType; created: boolean }>) => {
        if (action.payload.created) {
          state.push(action.payload.group);
        }
      },
    );

    builder.addCase(addStudentsThunk.fulfilled, (state, action: PayloadAction<StudentType[]>) => {
      const group = state.find((el) => el.id === action.payload[0]?.group_id);
      if (group) {
        action.payload.forEach((student) => {
          if (student.id && !group.students.some((s) => s.id === student.id)) {
            group.students.push(student);
          }
        });
      }
    });

    builder.addCase(delGroupThunk.fulfilled, (state, action: PayloadAction<number>) =>
      state.filter((el) => el.id !== action.payload),
    );

    builder.addCase(delStudentThunk.fulfilled, (state, action: PayloadAction<number>) => {
      state.forEach((group) => {
        group.students = group.students.filter((student) => student.id !== action.payload);
      });
    });
  },
});

export default groupSlice.reducer;
export const { deleteStudentAction, addGroupAction, addGroupsAction } = groupSlice.actions;
