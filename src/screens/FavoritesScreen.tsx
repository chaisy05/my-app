import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeLikedPhoto } from '../redux/photosSlice';
import PhotoItem from '../components/PhotoItem';

const FavoritesScreen: React.FC = () => {
  const dispatch = useDispatch();
  const likedPhotos = useSelector((state: RootState) => state.photos.likedPhotos);

  const handleRemoveLike = (id: string) => {
    dispatch(removeLikedPhoto(id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={likedPhotos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PhotoItem
            photo={item}
            liked
            onRemoveLike={() => handleRemoveLike(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FavoritesScreen;
