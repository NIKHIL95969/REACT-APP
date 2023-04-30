import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Button, Image, Input } from '@rneui/base'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';




export default function LoginScreen({navigation}) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const SignIn = () => {};

    // const RegisterPage = () => {Navi};

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
                <Button touchSoundDisabled={false} containerStyle={styles.button} onPress={SignIn} title="Login"/>
                <Button touchSoundDisabled={false} containerStyle={styles.button} onPress={ () => navigation.navigate("Register")} type='outline' title="Register"/>
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