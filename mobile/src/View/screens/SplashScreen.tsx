import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/splash.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34D399',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '66.666%',
    height: '16.666%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
