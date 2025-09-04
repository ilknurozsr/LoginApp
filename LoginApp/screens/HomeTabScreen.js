import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase';

export default function HomeTabScreen() {
    const userEmail=auth.currentUser?.email;

  return (
   <View style={styles.container}>
      <Text style={styles.text}>Hoşgeldin {userEmail}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    }
})