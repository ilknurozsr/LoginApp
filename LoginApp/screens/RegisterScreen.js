import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleRegister= async()=>{
   if(!email || !password){
    Alert.alert('Hata', 'Lütfen tüm alanları doldurun!');
    return;
   }
   try{
    await createUserWithEmailAndPassword(auth,email,password);
   Alert.alert('Başarılı','Kayıt başarılı! Giriş yapabilirsiniz.');
   navigation.replace('Login');
   } catch (error) {
     Alert.alert('Kayıt Hatası', error.message);
   }
};
return (
   <View style={styles.container}>
    <Text style={styles.title}>Kayıt Ol</Text>

    <TextInput style={styles.input}
    placeholder='Email'
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    /> 

    <TextInput style={styles.input}
    placeholder='Şifre'
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    />

    <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
    </TouchableOpacity>

    <Text style={styles.loginLink} onPress={()=>navigation.navigate('Login')}>
        Zaten hesabın var mı? Giriş Yap
    </Text>
   </View>
);
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center',
    },
    title:{
        fontSize:28,
        marginBottom:30,
        textAlign:'center',
        fontWeight:'bold',
        color:'#333',
    },
    input:{
        height:50,
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:15,
        marginBottom:20,
        backgroundColor:'#fff',
        elevation:2,
    },
    loginLink:{
        marginTop:20,
        textAlign:'center',
        color:'blue',
        fontSize:16,
    },
    button:{
        backgroundColor:'#3478f6',
        paddingVertical:12,
        borderRadius:10,
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
});

export default RegisterScreen;