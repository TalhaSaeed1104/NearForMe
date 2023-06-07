import React from 'react';
import { Button, View, Linking } from 'react-native';

const AppLink = () => {
  const handleButtonPress = async () => {
    const packageId = 'com.yourapp.package'; // Replace with your app's package ID
    const appUrl = `android-app://${packageId}`;

    // Generate the app link
    const url = await Linking.makeUrl(appUrl);

    // Open the generated link
    Linking.openURL(url);
  };

  return (
    <View>
      <Button title="Generate App Link" onPress={handleButtonPress} />
    </View>
  );
};

export default AppLink;
