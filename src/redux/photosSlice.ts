import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

interface Photo {
  id: string;
  thumbnail: string;
  title: string;
  liked: boolean;
}

interface PhotosState {
  photos: Photo[];
  likedPhotos: Photo[];
}

const initialState: PhotosState = {
  photos: [],
  likedPhotos: [],
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    fetchPhotosSuccess(state, action: PayloadAction<Photo[]>) {
      state.photos = action.payload;
    },
    likePhoto(state, action: PayloadAction<string>) {
      const photoId = action.payload;
      const photo = state.photos.find((photo) => photo.id === photoId);
      if (photo) {
        photo.liked = !photo.liked;
        if (photo.liked) {
          state.likedPhotos.push(photo);
        } else {
          state.likedPhotos = state.likedPhotos.filter((p) => p.id !== photoId);
        }
      }
    },
    removeLikedPhoto(state, action: PayloadAction<string>) {
      const photoId = action.payload;
      state.likedPhotos = state.likedPhotos.filter((p) => p.id !== photoId);
      const photo = state.photos.find((photo) => photo.id === photoId);
      if (photo) {
        photo.liked = false;
      }
    },
  },
});

export const { fetchPhotosSuccess, likePhoto, removeLikedPhoto } = photosSlice.actions;

export const fetchPhotos = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
    const data = await response.json();
    console.log(data, '= data');
    dispatch(fetchPhotosSuccess(data));
  } catch (error) {
    console.error('Failed to fetch photos:', error);
  }
};

export const selectPhotos = (state: RootState) => state.photos.photos;

export default photosSlice.reducer;
