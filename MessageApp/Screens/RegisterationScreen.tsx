import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View, Button } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { Image } from '@rneui/base';
import { Input } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';

export default function RegisterationScreen({navigation}) {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const register = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Register"});
  }, [navigation]);

  return (
    <KeyboardAvoidingView style={styles.container}>
        
        <StatusBar 
            backgroundColor="#61dafb"
            hidden= {false}
        />
        <View style={styles.imageContainer}>
            <Image
            source={{uri: 'https://png.pngtree.com/png-clipart/20200709/original/pngtree-chat-message-variation-png-image_4120416.jpg'}}
            style={{width: 200, height: 200,}}
            />
        </View>
        <View style={styles.inputContainer}>
            <Input
                placeholder='Name'
                // type="name"
                autoFocus
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Input
                placeholder='Email'
                // type="email"
                autoFocus
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Input
                placeholder='Password'
                secureTextEntry
                // type="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
        
            <View style={styles.btnLogin}>
                <Button onPress={register} touchSoundDisabled={false} containerStyle={styles.button} type='outline' title="Register"/>
            </View>
        </View>
    
      
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  imageContainer: {
    alignItems: 'center'
  },
  inputContainer:{
      
  },
  hadingText:{
    color: 'blue',
  },

  button: {
    marginBottom: 10
  },
  btnLogin: {
    // width: 400,

  },
})