import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import PhotoItem from '../components/PhotoItem';


const FavoritesScreen: React.FC = () => {
  const likedPhotos = useSelector((state: RootState) => state.photos.likedPhotos);

  return (
    <View>
      <FlatList
        data={likedPhotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PhotoItem
            photo={item}
            liked
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
