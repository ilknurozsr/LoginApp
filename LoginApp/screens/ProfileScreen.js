import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
     <View style={styles.container}>
      <Text style={styles.text}>Profil Ekranı</Text>
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
    },
})