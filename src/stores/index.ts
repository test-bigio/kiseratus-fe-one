import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reducer from './reducer';

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
