import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { likePhoto, removeLikedPhoto } from '../redux/photosSlice'; 

interface PhotoItemProps {
  photo: { id: string, thumbnailUrl: string, title: string };
  liked?: boolean;
  onLike?: () => void;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo, liked = false, onLike }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    if (onLike) {
      onLike();
    } else {
      dispatch(likePhoto(photo.id));
    }
  };

  const handleRemoveLike = () => {
    dispatch(removeLikedPhoto(photo.id));
  };

  return (
    <View>
      <Image source={{ uri: photo.thumbnailUrl }} style={{ width: 100, height: 100 }} />        
      <Text>{photo.title}</Text>
      <TouchableOpacity onPress={handleLike}>
        <Text>{liked ? 'Liked' : 'Like'}</Text>
      </TouchableOpacity>
      {liked && (
        <TouchableOpacity onPress={handleRemoveLike}>
          <Text>Remove</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PhotoItem;
