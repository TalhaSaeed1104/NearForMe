import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const IconsBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="bars" size={30} color="#000" style={styles.icon} />
    </View>
  );
};

export default IconsBar;
