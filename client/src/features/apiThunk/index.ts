import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { GroupType, StudentType, StudentsSubmitType } from '../../types';
import { setModalNotify } from '../slices/ConfirmModalSlise';
import { setNotify } from '../slices/notifySlice';

export const fetchGroups = createAsyncThunk<GroupType[]>('groups/fetchGroups', async (groupName) =>
  axios<GroupType[]>('/api/group')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error('post get Error');
    }),
);

export const createGroupThunk = createAsyncThunk<GroupType, { groupName: string; phase: string }>(
  'groups/createGroup',
  async (newGroup, { dispatch }) =>
    axios
      .post<GroupType>('/api/group', newGroup)
      .then((res) => res.data)
      .catch((err) => {
        dispatch(setNotify('Error create group'));
        throw new Error('post get Error');
      }),
);

export const fetchGroupById = createAsyncThunk<GroupType, Pick<GroupType, 'id'>>(
  'groups/fetchGroupById',
  async (id) =>
    axios
      .post<GroupType>('/api/group', { id })
      .then((res) => res.data)
      .catch(() => {
        throw new Error('post get Error');
      }),
);

export const addStudentsThunk = createAsyncThunk<StudentType[], StudentsSubmitType>(
  'students/addStudents',
  async (students, { dispatch }) =>
    axios
      .post<StudentType[]>('/api/students', students)
      .then((res) => res.data)
      .catch(() => {
        dispatch(setNotify('Error add students'));
        throw new Error('post get Error');
      }),
);

export const delGroupThunk = createAsyncThunk<number, number>(
  'groups/delete',
  async (id, { dispatch }) =>
    axios
      .delete<number>(`/api/group/${id}`)
      .then(() => {
        dispatch(setModalNotify(null));
        return +id;
      })
      .catch(() => {
        throw new Error('post get Error');
      }),
);

export const delStudentThunk = createAsyncThunk<number, number>(
  'students/delete',
  async (id, { dispatch }) =>
    axios
      .delete<number>(`/api/students/${id}`)
      .then(() => {
        dispatch(setNotify('Successfull delete student'));
        return +id;
      })
      .catch(() => {
        dispatch(setNotify('Error delete student'));
        throw new Error('post get Error');
      }),
);
