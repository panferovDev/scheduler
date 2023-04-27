import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { DirectionFormType, DirectionFromApiType } from '../../types';
import { setNotify } from '../slices/notifySlice';
import { setModalNotify } from '../slices/ConfirmModalSlise';

export const addDirectionThunk = createAsyncThunk<DirectionFromApiType, DirectionFormType>(
  'direction/addDirection',
  async ({direction, weeks}, { dispatch }) =>
    axios
      .post<DirectionFromApiType>('/api/direction', { direction, weeks: parseInt(weeks, 10) })
      .then((res) => res.data)
      .catch(() => {
        dispatch(setNotify('error adding direction'));
        throw new Error('post get Error');
      }),
);

export const delDirectionThunk = createAsyncThunk<number, number>(
  'direction/delDirection',
  async (id, { dispatch }) =>
    axios
      .delete<number>(`/api/direction/${id}`)
      .then(() => {
        dispatch(setModalNotify(null));
        return id;
      })
      .catch(() => {
        dispatch(setModalNotify(null));
        dispatch(setNotify('error deleting direction'));
        throw new Error('delete get Error');
      }),
);
