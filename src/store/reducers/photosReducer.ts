import { createReducer } from '@reduxjs/toolkit';
import { fetchPhotos, likePhoto } from '../actions/photosActions';

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

const photosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPhotos, (state, action) => {
      state.photos = action.payload;
    })
    .addCase(likePhoto, (state, action) => {
      const photoId = action.payload;
      const photoIndex = state.photos.findIndex((photo) => photo.id === photoId);
      if (photoIndex !== -1) {
        state.photos[photoIndex].liked = !state.photos[photoIndex].liked;
        if (state.photos[photoIndex].liked) {
          state.likedPhotos.push(state.photos[photoIndex]);
        } else {
          state.likedPhotos = state.likedPhotos.filter((photo) => photo.id !== photoId);
        }
      }
    });
});

export default photosReducer;
