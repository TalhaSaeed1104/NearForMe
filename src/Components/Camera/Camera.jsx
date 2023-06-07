import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const cameraRef = useRef(null);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={Camera.Constants.Type.back} />
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={handleCapture} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 32,
    alignItems: 'center',
    width: '100%',
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'white',
  },
});

export default CameraScreen;
