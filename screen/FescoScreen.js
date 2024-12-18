// GepcoScreen.js
import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import BillScreen from '../component/BillScreen';


const FescoScreen = () => {

  const handlePrintBill = () => {
    // Handle print bill for Screen
  };

  const handlePayBill = (showPaymentOptions) => {
    // Handle pay bill for Screen
    showPaymentOptions();
  };

  return (
   
     <BillScreen
     title="Search Your Bill"
      searchPlaceholder="Reference No"
      onPrintBill={handlePrintBill}
      onPayBill={handlePayBill}
      apiUrl="https://bill.pitc.com.pk/fescobill/general/"
     />
  );
};

export default FescoScreen;
