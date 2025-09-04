import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import MainTabNavigator from './MainTabNavigator';


const Stack=createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  },[]);

  if(loading) return null; 

  return (
   <NavigationContainer>
      {user ? (
        <MainTabNavigator />
      ) : (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Giriş Yap' }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Kayıt Ol' }}
          />
        </Stack.Navigator>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
