import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICommonState } from '../reducer/initialState';

export const getUserCredentials = createAsyncThunk('common/getCredentials', async () => {
  throw Error;
  return new Promise<ICommonState>((resolve) =>
    setTimeout(() => resolve({ login: 'login', password: 'password' }), 2000),
  );
});
