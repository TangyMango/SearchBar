import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductsItems = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.textProductTitle}>{product.name}</Text>
        <Text style={styles.textProductPrice}>${product.price}</Text>
        <Text style={styles.textProductDescription}>{product.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EAEDED',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: 'white',
    alignItems: 'center',
  },
  detailsContainer: {
    marginLeft: 10,
  },
  textProductTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textProductPrice: {
    fontSize: 16,
  },
  textProductDescription: {
    fontSize: 14,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});

export default ProductsItems;