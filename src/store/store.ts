import { configureStore, combineReducers } from '@reduxjs/toolkit';

import commonState from './common/reducer';

const rootReducer = combineReducers({
  commonState,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  reducer: rootReducer,
});
