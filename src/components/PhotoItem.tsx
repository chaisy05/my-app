import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { likePhoto } from '../store/actions/photosActions';

interface PhotoItemProps {
  photo: { id: string, thumbnail: string, title: string };
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

  return (
    <View>
      <Image source={{ uri: photo.thumbnailUrl }} style={{ width: 100, height: 100 }} />        
      {/* the red flag shows that there is an error in the thumbnail as the thumbnail Url does not exist */}
      <Text>{photo.title}</Text>
      <TouchableOpacity onPress={handleLike}>
        <Text>{liked ? 'Liked' : 'Like'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoItem;
