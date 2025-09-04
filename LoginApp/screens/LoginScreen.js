import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


const LoginScreen=({ navigation })=>{
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

const handleLogin= async()=>{
    if(!email || !password){
        Alert.alert('Hata', 'Lütfen tüm alanları doldurun!');
        return;
    }

    try{
        await signInWithEmailAndPassword(auth,email,password);
        Alert.alert('Başarılı', 'Giriş başarılı!');
        navigation.replace('Home');
    }catch (error){
        console.log(error);
        Alert.alert('Hata', error.message);
    }
};

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput style={styles.input}
        placeholder='E-posta'
        value={email}
        onChangeText={setEmail}
        />
        <View style={styles.passwordContainer}>
         <TextInput
        style={styles.passwordInput}
        placeholder="Şifre"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.toggleText}>{showPassword ? 'Gizle' : 'Göster'}</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLinkText}>Hesabın yok mu? Kayıt Ol</Text>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9f0f4',
        justifyContent:'center',
        padding:20,
    },
    title:{
        fontSize:28,
        textAlign:'center',
        marginBottom:30,
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
    registerLink: {
        marginTop: 20,
    },
    registerLinkText: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 16,
    },
    passwordContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        marginBottom:20,
        backgroundColor:'#fff',
        elevation:2,
        height:50,
    },
    toggleText:{
        color:'blue',
        marginLeft:10,
        fontWeight:'bold',
    },
    passwordInput:{
        flex:1,
        height:'100%',
    }
});

export default LoginScreen;