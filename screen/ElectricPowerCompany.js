import Company from '../component/Company';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet ,ScrollView} from 'react-native';
const ElectricPowerCompany = () => {
    const navigation = useNavigation();
  
    const productList = [
        {
            name: "MEPCO Bill",
            image: require("../assets/Mepco.png"),
            desc: "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "MepcoScreen",
          },
          {
            name: "FESCO Bill",
            image: require("../assets/fesco.png"),
            desc:  "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "FescoScreen",
          },
          {
            name: "GEPCO Bill",
            image: require("../assets/gepco.png"),
            desc:  "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "GepcoScreen",
          },
          {
            name: "HESCO Bill",
            image: require("../assets/hesco.png"),
            desc:  "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "HescoScreen",
          },
          {
            name: "IESCO Bill",
            image: require("../assets/iesco.png"),
            desc:  "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "IescoScreen",
          },
          {
            name: "PESCO Bill",
            image: require("../assets/pesco.png"),
            desc: "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "PescoScreen",
          },
          {
            name: "SEPCO Bill",
            image: require("../assets/sepco.png"),
            desc:  "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "SepcoScreen",
          },
          {
            name: "QESCO Bill",
            image: require("../assets/qesco.png"),
            desc:  "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "QescoScreen",
          },
          {
            name: "TESCO Bill",
            image: require("../assets/tesco.png"),
            desc:  "You can download and paybills from our pakbill App by using just a 14-digit Reference Number.",
            screen: "TescoScreen",
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

export default ElectricPowerCompany;