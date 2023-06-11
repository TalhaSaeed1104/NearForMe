import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { GOOGLE_PLACES_API_KEY } from '../../../ApiKey/ApiKey';

export default function PlacesApp() {
  const [places, setPlaces] = useState([]);

  const handleButtonPress = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const radius = 6000; // Radius in meters (adjust as needed)
      const type = 'restaurant'; 
      const keyword = 'restaurant'; 



      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${keyword}&type=${type}&key=${GOOGLE_PLACES_API_KEY}`
      );

      setPlaces(response.data.results);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Find Places" onPress={handleButtonPress} />
      {places.length > 0 ? (
        <View>
          <Text>Nearby Places:</Text>
          {places.map((place, index) => (
            <Text key={index}>{place.name}</Text>
          ))}
        </View>
      ) : (
        <Text>No places found.</Text>
      )}
    </View>
  );
}
