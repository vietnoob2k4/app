// screens/ScanScreen.js

import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ScanScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
      <Icon name="arrow-back" size={30} color="#000" />
    </TouchableOpacity>
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
        style={styles.juiceImage}
      />
    </View>
    <View style={styles.productInfo}>
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual image URL
        style={styles.productIcon}
      />
      {/* Product Text */}
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  juiceImage: {
    width: 200,
    height: 400,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  productIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  addButton: {
    backgroundColor: '#007bff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScanScreen;
