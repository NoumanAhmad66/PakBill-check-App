// SplashScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('SplashScreen mounted');
    try {
      const timer = setTimeout(() => {
        console.log('Navigating to HomeScreen');
        navigation.replace('PakBills');
      }, 3000);
  
      return () => {
        console.log('Clearing timer');
        clearTimeout(timer);
      };
    } catch (error) {
      console.error('Error in SplashScreen:', error);
    }
  }, [navigation]);

  return (
    <View style={styles.container}  edges={['top']}  >
      
      <Image
        source={require('../assets/splash1.png')} // Replace with the actual path to your image
        style={styles.logo}
        resizeMode="contain"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center',
    paddingTop:0,
    marginTop:-10,
    
  },
  logo: {
    width:"100%", // Set the width of your image
    height:"101%", // Set the height of your image
    
  },
  
});

export default SplashScreen;
