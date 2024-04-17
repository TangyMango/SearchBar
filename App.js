import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import SearchBar from "./Components/SearchBar";
import ProductsList from "./Components/ProductsList";
import products from "./data";

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (text) => {
    setSearch(text); 
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearchSubmit = () => {
    console.log('Texto de búsqueda:', search);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log('Productos filtrados:', filtered);
    setFilteredProducts(filtered);
  };
  
  const handleSearchSubmitOnReturn = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      console.log('Enter en la searchBar');
      handleSearchSubmit();
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={handleSearchChange}
        onSubmitEditing={handleSearchSubmitOnReturn}
      />
      <Button
        title="Search"
        onPress={handleSearchSubmit}
      />
      <ProductsList products={filteredProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
});
