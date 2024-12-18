import Company from '../component/Company';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet ,ScrollView} from 'react-native';
const Wasa = () => {
    const navigation = useNavigation();
  
    const productList = [
        {
            name: "Lahore Wasa Bill",
            image: require("../assets/wla.png"),
            desc: "Nature Pictures, Images and Stock Photos",
            screen: "LahoreScreen",
          },
          
          {
            name: "Hyderabad Wasa Bill",
            image: require("../assets/why.png"),
            desc: "Nature Pictures, Images and Stock Photos",
            screen: "HyderabadScreen",
          },
         
      // Add other items as needed
    ];
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {productList.map((item, index) => (
            <Company key={index} {...item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ECECEC', // Light gray background
          },
          scrollView: {
            padding: 16,
          },
      });

export default Wasa;