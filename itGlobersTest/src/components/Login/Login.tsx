import React from 'react';
import {StyleSheet, TextInput, View , TouchableOpacity ,Image} from 'react-native';
import {Text} from "react-native-web";



export default function Login() {
  return (
      <View style={styles.container}>
          <Image style={ styles.logoImage} source = { require("../../../assets/images/logo.png")}
                 resizeMode="contain"/>
          <Text style={ styles.text }>Email</Text>
          <TextInput style={styles.textInput} placeholder="Email"></TextInput>
          <Text style={ styles.text }>Password</Text>
          <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Password"></TextInput>

          <TouchableOpacity style={ styles.btn }>
                <Text style={ styles.text }>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.btn }>
              <Text style={ styles.text }>Register</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    logoImage: {
      width: '120px',
      height: '56px',
        margin: '4rem'
    },
    btn: {
        alignItems: "center",
        backgroundColor: "rgb(72, 0, 149)",
        padding: 10,
        paddingHorizontal:30,
        margin: 10,
        borderRadius: 20
    },
    text: {
        color: "#fff",
        fontWeight: "bold"
    },
    textInput:{
      backgroundColor: '#fff',
        borderRadius: 30,
        margin:10,
        padding:10,
        paddingStart:30,
    }
});