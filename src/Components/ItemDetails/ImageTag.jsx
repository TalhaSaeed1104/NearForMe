import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
});

const ImageFile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Food_Img.jpg')} // Replace with the actual image path
        style={styles.image}
      />
    </View>
  );
};

export default ImageFile;
