import React from 'react'
import { Stack, SplashScreen} from 'expo-router'
import {useFonts} from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  




  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{headerShown: false }}/>
      <Stack.Screen name="login" options={{headerShown: false }}/>
      <Stack.Screen name="signup" options={{headerShown: false }}/>
    </Stack>
  )
}

export default MainLayout