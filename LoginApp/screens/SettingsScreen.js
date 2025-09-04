import { StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import React, { useRef } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function SettingsScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.8, 
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(async () => {
      try {
        await signOut(auth);
        navigation.navigate('Login');
      } catch (error) {
        console.log('Çıkış hatası:', error);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ayarlar</Text>
      <Pressable onPress={handlePress}>
        <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
