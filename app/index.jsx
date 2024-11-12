import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router} from 'expo-router';
import  Custombutton  from '../components/custombutton';

const Index = () => {
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

        <Custombutton 
        
        title = "Login"containerStyles="mt-4 items-center"
        handlePress={()=> router.push('/login')}>
          
        </Custombutton>

        <Custombutton 
        
        title = "Sign Up"containerStyles="mt-4 items-center"
        handlePress={()=> router.push('/signup')}>
          
        </Custombutton>
      </View>
    </ImageBackground>
  );
};

export default Index;

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
  },
  logo: {
    width: 150,  
    height: 150, 
    marginBottom: 30,
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
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signupButtonText: {
    color: 'blue',
  },
});