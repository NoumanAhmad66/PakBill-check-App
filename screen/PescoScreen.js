import React from 'react';
import BillScreen from '../component/BillScreen';

const PescoScreen = () => {
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
      apiUrl="https://bill.pitc.com.pk/pescobill/general/"
     />
  );
};

export default PescoScreen;