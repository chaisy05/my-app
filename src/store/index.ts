import { combineReducers } from 'redux';
import photosReducer from '../redux/photosSlice';

const rootReducer = combineReducers({
  photos: photosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;