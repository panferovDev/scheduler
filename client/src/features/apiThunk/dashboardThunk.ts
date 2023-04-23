import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { DirectionType, GroupType } from '../../types';
import { addGroupsAction } from '../slices/groupSlice';
import { setNotify } from '../slices/notifySlice';
import { addDirectionsAction } from '../slices/directionSlice';

type DashboardDataType = {
  groups: GroupType[];
  directions: DirectionType[];
};

const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchDashboardData',
  async (_, { dispatch }) =>
    axios<DashboardDataType>('/api/dashboard')
      .then((res) => {
        dispatch(addDirectionsAction(res.data.directions));
        dispatch(addGroupsAction(res.data.groups));
      })
      .catch(() => {
        dispatch(setNotify('Error fetch dashboard data'));
      }),
);

export default fetchDashboardData;
