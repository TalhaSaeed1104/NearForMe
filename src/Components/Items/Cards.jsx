import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Card = ({ content, logoImage }) => {
  return (
    <View style={styles.card}>
      
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5,
    margin: 10,
    height:120,
    width:100,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});

export default Card;
