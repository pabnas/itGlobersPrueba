import React from 'react';
import Login from './src/components/Login/Login';
import {StyleSheet, View, ImageBackground} from 'react-native';

const imageBackground = require('./assets/images/it-globers-bkg1.jpg');

export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground source={ imageBackground } resizeMode="cover" style={styles.image}>
            <Login/>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
    image:{
        width: '100%',
        height: '100%',
        flex: 1
    }
});
