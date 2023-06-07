import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Card } from '../../Components/Items/Cards';
import ImageFile from "../../Components/ItemDetails/ImageTag";

const ItemsDetails = (props) => {

  // const handleButtonPress = async () => {
  //   const packageId = 'com.mobileapp_nearforme'; // Replace with your app's package ID
  //   const appUrl = `android-app://${packageId}`;

  //   // Generate the app link
  //   const url = await Linking.makeUrl(appUrl);

  //   // Open the generated link
  //   Linking.openURL(url);
  // };

  return (
    <>
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
        <ImageFile />
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Camera')}>
          <Card 
          content='Location'
          logoImage={require('../../../assets/location.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Card
          content='Share'
          logoImage={require('../../../assets/share.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ItemsDetails;


const styles = StyleSheet.create({
  cardContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-around",
  },
})