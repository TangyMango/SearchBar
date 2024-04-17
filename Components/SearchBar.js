import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText, onSubmitEditing }) => {
  return (
    <TextInput
      placeholder="Buscar producto..."
      multiline={false}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      style={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 18,
  }
});

export default SearchBar;