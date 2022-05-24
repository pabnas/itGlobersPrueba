import React, {useState} from 'react';
import {StyleSheet, TextInput, View , TouchableOpacity ,Image} from 'react-native';
import {Text} from "react-native-web";
import { login } from "../Api/Api";

function logInUser(username: string, password: string) {
    const user = { email: username , password: password};
    login(user);
}


export default function Login() {
  const [username,setUsername] = useState('');
  const [password,setpassword] = useState('');


  return (
      <View style={styles.container}>
          <Image style={ styles.logoImage}
                 source = { require("../../../assets/images/logo.png")}
                 resizeMode="contain"/>

          <Text style={ styles.text }>Email</Text>
          <TextInput style={styles.textInput} onChangeText={setUsername}
                     value={username} placeholder="email@email.com"></TextInput>

          <Text style={ styles.text }>Password</Text>
          <TextInput secureTextEntry={true} onChangeText={setpassword} value={password}
                     style={styles.textInput} placeholder="Password"></TextInput>

          <TouchableOpacity style={ styles.btn } onPress={() => logInUser(username,password) }>
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