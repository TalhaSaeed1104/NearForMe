import React from 'react';
import { View, Image, Pressable, ImageBackground, StyleSheet, Text } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/home_bg.jpeg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Image
            source={require('../../../Origional_Image/download_location.png')} // Replace with the actual image path
            style={styles.image}
          />
          <Text style={styles.textStyle}>NEAR FOR ME</Text>
        </View>
        <Pressable style={styles.button2} onPress={()=>props.navigation.navigate('NearForMe')}>
          <Text style={styles.text}>Let's Find</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems:'center',
  },
  button2: {
    width:315,
    zIndex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    margin:20,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'white',
    opacity:0.6,
  },
  text: {
    fontSize: 35,
    lineHeight: 30,
    justifyContent:'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'black',
    opacity:1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:20,
  },
  textStyle:{
    fontSize:35,
    color:'white',
  },
});

export default HomeScreen;
