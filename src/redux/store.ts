import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './photosSlice';

export type RootState = ReturnType<typeof store.getState>;

// Create the Redux store
const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export default store;
