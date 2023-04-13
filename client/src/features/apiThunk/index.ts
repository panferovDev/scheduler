import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { GroupType } from '../../types';

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
      .catch((err) => {
        throw new Error('post get Error');
      }),
);
