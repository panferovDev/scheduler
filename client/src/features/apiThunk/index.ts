import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { GroupType, StudentType, StudentsSubmitType } from '../../types';

export const fetchGroups = createAsyncThunk<GroupType[]>('groups/fetchGroups', async (groupName) =>
  axios<GroupType[]>('/api/group')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error('post get Error');
    }),
);

export const createGroupThunk = createAsyncThunk<GroupType, string>(
  'groups/createGroup',
  async (groupName) =>
    axios
      .post<GroupType>('/api/group', { groupName })
      .then((res) => res.data)
      .catch((err) => {
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
  async (students) =>
    axios.post<StudentType[]>('/api/students', students)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('post get Error');
    }),
)

export const delGroupThunk = createAsyncThunk<number, number>(
  'groups/delete',
  async (id) => 
    axios.delete<number>(`/api/group/${id}`)
    .then(() => +id)
    .catch(() => {
      throw new Error('post get Error');
    })

)
