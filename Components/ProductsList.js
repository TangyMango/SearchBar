import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import ProductsItems from "./ProductsItems";

const ProductsList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  return (
    <React.Fragment>
      <FlatList
        data={products}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <ProductsItems product={item} />
          </TouchableOpacity>
        )}
      />
      {selectedProduct && (
        <View style={styles.selectedProductContainer}>
            <Image source={selectedProduct.image} style={styles.image} />
          <Text style={styles.selectedProductText}>
            Detalles del producto:
          </Text>
          <Text style={styles.selectedProductText}>
            Nombre: {selectedProduct.name}
          </Text>
          <Text style={styles.selectedProductText}>
            Precio: ${selectedProduct.price}
          </Text>
          <Text style={styles.selectedProductText}>
            Descripción: {selectedProduct.description}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  selectedProductContainer: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '100%',
  },
  selectedProductText: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default ProductsList;

