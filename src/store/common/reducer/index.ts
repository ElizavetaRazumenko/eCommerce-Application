import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

import { ActionPayload } from '../../types';
import { getUserCredentials } from '../actions';

const commonStateSlice = createSlice({
  initialState,
  name: 'commonState',
  extraReducers: (builder) => {
    builder.addCase(getUserCredentials.fulfilled, (_, { payload }) => payload);
    builder.addCase(getUserCredentials.rejected, (state) => {
      state.isFetching = false;
      alert('something goes wrong');
    });
    builder.addCase(getUserCredentials.pending, (state) => {
      state.isFetching = true;
    });
  },
  reducers: {
    setCredentials: (state, { payload }: ActionPayload<{ [key: string]: string }>) => ({
      ...state,
      ...payload,
    }),
  },
});

export const { setCredentials } = commonStateSlice.actions;
export default commonStateSlice.reducer;
