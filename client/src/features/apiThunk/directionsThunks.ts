import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { DirectionFromApiType, DirectionType } from '../../types';
import { setNotify } from '../slices/notifySlice';
import { setModalNotify } from '../slices/ConfirmModalSlise';

// eslint-disable-next-line import/prefer-default-export
export const addDirectionThunk = createAsyncThunk<DirectionFromApiType, string>(
  'direction/addDirection',
  async (direction, { dispatch }) =>
    axios
      .post<DirectionFromApiType>('/api/direction', { direction })
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
