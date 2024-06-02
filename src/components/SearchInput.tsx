import React, { useState } from 'react';
import { TextInput } from 'react-native';

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text: string) => {
    // Implement your search logic here
    console.log('Searching for:', text);
    setSearchTerm(text);
  };

  return (
    <TextInput
      placeholder="Search photos..."
      onChangeText={handleSearch}
      value={searchTerm}
    />
  );
};

export default SearchInput;
