import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar , StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native'; // Import StatusBar

import SplashScreen from './screen/SplashScreen';
import MepcoScreen from './screen/MepcoScreen';
import FescoScreen from './screen/FescoScreen';
import GepcoScreen from './screen/GepcoScreen';
import HescoScreen from './screen/HescoScreen';
import SUI from './screen/SUI';
import SepcoScreen from './screen/SepcoScreen';
import IescoScreen from './screen/IescoScreen';
import ElectricPowerCompany from './screen/ElectricPowerCompany';
import TescoScreen from './screen/TescoScreen';
import QescoScreen from './screen/QescoScreen';
import PakBills from './screen/PakBills';
import PescoScreen from './screen/PescoScreen';
import Wasa from './screen/Wasa';
import LahoreScreen from './screen/LahoreScreen';

import HyderabadScreen from './screen/HyderabadScreen';






const Stack = createStackNavigator();

const App = () => {
  
  return (
    <View style={{ flex: 1 }}>
    <NavigationContainer >
      
      <StatusBar
        backgroundColor="#126F31" // Set the background color of the status bar
        barStyle="light-content" // Set the content color of the status bar (light or dark)
        
      />

      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#12A031',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false  }} />
        <Stack.Screen name="PakBills" component={PakBills} options={{title:"PakBills" ,headerTitleStyle: {
      fontSize: 22, fontWeight: 'bold', color: '#ffff' },
      headerTitleAlign: 'center',  }}/>
        <Stack.Screen name="ElectricPowerCompany" component={ElectricPowerCompany}  options={({ navigation }) => ({
    title: 'Electric Power Company',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/electric.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
          <Stack.Screen name="SUI" component={SUI} options={({ navigation }) => ({
    title: 'SUI Northern Gas Limited',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/gas.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
          <Stack.Screen name="Wasa" component={Wasa}options={({ navigation }) => ({
    title: 'Water And Sanitaion Agency',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/wasa.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}   />
        <Stack.Screen name="MepcoScreen" component={MepcoScreen} options={({ navigation }) => ({
    title: 'MEPCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/Mepco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })} />
        <Stack.Screen name="FescoScreen" component={FescoScreen} options={({ navigation }) => ({
    title: 'FESCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/fesco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })} />
        <Stack.Screen name="GepcoScreen" component={GepcoScreen} options={({ navigation }) => ({
    title: 'GEPCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/gepco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
        <Stack.Screen name="HescoScreen" component={HescoScreen} options={({ navigation }) => ({
    title: 'HESCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/hesco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })} />
        <Stack.Screen name="IescoScreen" component={IescoScreen}  options={({ navigation }) => ({
    title: 'IESCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/iesco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })} />
        <Stack.Screen name="PescoScreen" component={PescoScreen}  options={({ navigation }) => ({
    title: 'PESCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/pesco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })} />
        <Stack.Screen name="QescoScreen" component={QescoScreen}  options={({ navigation }) => ({
    title: 'QESCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/qesco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
        <Stack.Screen name="TescoScreen" component={TescoScreen} options={({ navigation }) => ({
    title: 'TESCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/tesco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
        <Stack.Screen name="SepcoScreen" component={SepcoScreen}  options={({ navigation }) => ({
    title: 'SEPCO',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/sepco.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
    <Stack.Screen name="LahoreScreen" component={LahoreScreen}  options={({ navigation }) => ({
    title: 'LAHORE WASA',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/wla.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
   
    <Stack.Screen name="HyderabadScreen" component={HyderabadScreen}  options={({ navigation }) => ({
    title: 'Hyderabad WASA',
    headerLeft: () => (
     
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Image
             source={require("./assets/left-arrow.png")}
            style={{ width: 24, height: 24, marginLeft: 8 }}
          />
           <Image
          source={require('./assets/why.png')}
          style={{ width: 30, height: 30,  resizeMode: 'contain' }}
        />
        </TouchableOpacity>
       
      
    ),
  })}  />
      </Stack.Navigator>
      
    </NavigationContainer>
    <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; Copyright 2023 PakBills Company,All Rights Reserved.</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#12A031',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center', // Add justifyContent
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:12,
  },
});
export default App;
