import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterationScreen from './Screens/RegisterationScreen';

const Stack = createNativeStackNavigator();

const globalScreenOption ={
  headingStyle: {background: 'blue'},
  headingTitleStyle: {color: 'white'}

};

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#61dafb',
          },
          // headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white' ,
        }}/>
        <Stack.Screen name="Register" component={RegisterationScreen}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#61dafb',
          },
          // headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white' ,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})