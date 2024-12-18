import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PakBills = () => {
    const navigation = useNavigation();
  
    const handleIconPress = (screenName) => {
      navigation.navigate(screenName);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableOpacity activeOpacity={1}  style={styles.customButton}    onPress={() => handleIconPress('ElectricPowerCompany')}>
            <Card style={styles.card}>
              <Image
                source={require('../assets/electric.png')}
                style={styles.cardImage}
                
              />
              
              
                  <Text style={styles.cardTitle}>Electric Power Company</Text>
                
            </Card>
          </TouchableOpacity>
  
          <TouchableOpacity activeOpacity={1}  style={styles.customButton} onPress={() => handleIconPress('SUI')}>
            <Card style={styles.card}>
              <Image
                source={require('../assets/gas.png')}
                style={styles.cardImage}
               />
             
                  <Text style={styles.cardTitle}>SUI Northern Gas Limited</Text>
                
            </Card>
          </TouchableOpacity>
        </View>
  
        <View style={styles.row2Container}>
          <TouchableOpacity activeOpacity={1}  style={styles.customButton} onPress={() => handleIconPress('Wasa')}>
            <Card style={styles.card}>
              <Image
                source={require('../assets/wasa.png')}
                style={styles.cardImage}
               
              />
               
              
              
                  <Text style={styles.cardTitle}>Water And Sanitation Agency (WASA)</Text>
               
            </Card>
          </TouchableOpacity>
  
          <TouchableOpacity activeOpacity={1}  style={styles.customButton} onPress={() => handleIconPress('OtherScreen4')}>
            <Card style={styles.card}>
              <Image
                source={require('../assets/other.png')}
                style={styles.cardImage}
                
              />
                
             
              
                  <Text style={styles.cardTitle}>Other Screen 4</Text>
                
            </Card>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const { width, height } = Dimensions.get('window');
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#FFFFFF',
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginTop: 30,
    },
    row2Container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    
    },
    card: {
      borderRadius: 12,
      height: height * 0.25,
      width: width * 0.45,
    //   elevation: 2,
    //   overflow: 'hidden',
      borderColor: "#E0E0E0",
      
    },
    customButton: {
        padding: 2, // Adjust padding to increase or decrease touchable area
        backgroundColor: '#8FC320',
        borderRadius: 12,
        
      },
    cardImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
        alignSelf:"center",
        marginTop:15,      
        resizeMode:"cover",
        
        
    },
  
    
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:15,
        color: '#333333', // Dark text color
      textAlign: 'center',
    },
  });
  
  export default PakBills;