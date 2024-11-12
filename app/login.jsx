import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router'; 
import CustomButton  from '../components/custombutton';
import FormField  from '../components/formfield';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter(); 
  const [form, setForm]=useState({
    email:'',
    password:''
  })

  const handleLogin = () => {
    
    console.log('Login pressed with email:', email);

    
    router.push('/home'); 
  };

  return (
    <ImageBackground 
      source={require('../assets/icons/logocctc.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/icons/cctc.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>NSTP Tracker</Text>
        <Text style={styles.quote}>Tracking Progress, Fostering Service</Text>
    
       
     <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-5"
                  keyboardType="email-address"
             />

        <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
        />
        <CustomButton 
        
        title = "Log in"containerStyles="mt-4 items-center"
        handlePress={()=> router.push('/home')}>
          
        </CustomButton>
        <Text style={styles.text}>
          Don't have an account?{' '}
          <Text style={styles.link} onPress={() => router.push('/signup')}>
            Sign up
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    width: '100%',
    padding: 16,
  },
  logo: {
    width: 150,  
    height: 150, 
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  text: {
    marginTop: 16,
  },
  link: {
    color: 'blue',
  },
  welcomeText: {
    color: 'blue',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quote: {
    color: 'gray',
    fontSize: 25,
    fontStyle: 'italic',
    marginBottom: 20,
  },
});