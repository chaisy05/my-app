import { createAction } from '@reduxjs/toolkit';

export const fetchPhotos = createAction('FETCH_PHOTOS');
export const likePhoto = createAction<string>('LIKE_PHOTO');
