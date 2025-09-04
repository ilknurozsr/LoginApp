import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const HomeScreen = ({navigation}) => {
  
  const handleLogout=async()=>{
    try{
      await signOut(auth);
    } catch (error){
      console.log('Çıkış hatası:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoş geldin!</Text>
       <Text style={styles.email}>{auth.currentUser?.email}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#f5f5f5',
    },
    text:{
      fontSize:24,
      fontWeight:'bold',
    },
    logoutButton:{
      backgroundColor:'#ff5c5c',
      paddingVertical:12,
      borderRadius:10,
      marginTop:20,
    },
    logoutButtonText:{
      color:'#fff',
      textAlign:'center',
      fontSize:18,
      fontWeight:'bold',
      padding:8
    },
    email:{
      fontSize:16,
      marginTop:10,
      color:'#333',
    },
});