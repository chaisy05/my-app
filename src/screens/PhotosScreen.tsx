import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchPhotos, likePhoto } from '../redux/photosSlice';

const PhotosScreen: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photos.photos);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleLike = (id: string) => {
    dispatch(likePhoto(id));
  };

  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by title..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <FlatList
        data={filteredPhotos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} /> 
            <Text>{item.title}</Text>
            <Text onPress={() => handleLike(item.id)}>{item.liked ? 'Unlike' : 'Like'}</Text>
          </View>
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
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  photoContainer: {
    marginBottom: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default PhotosScreen;
