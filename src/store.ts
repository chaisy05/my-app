import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import photosReducer from './redux/photosSlice';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;