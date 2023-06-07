import React from 'react'
import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import IconsBar from "../../Components/Icons/Hamburger_bars";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Home = (props) => {
  return (
    <>
      <View style={styles.container}>
        {/* <IconsBar /> */}
        <Pressable style={styles.button} onPress={()=>props.navigation.navigate('Items')}>
          <Text style={styles.text}>Near Me Places</Text>
        </Pressable>
        <Pressable style={styles.button2}>
          <Text style={styles.text}>Near Me Places</Text>
        </Pressable>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height:200,
    width:320,
    margin:20,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    marginBottom:20,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#2193F3',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    marginBottom:20,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'rgba(255, 0, 0, 1)',
    opacity:0.6,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    justifyContent:'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    opacity:1,
  },
});