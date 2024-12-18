import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet, TextInput, TouchableOpacity ,Animated, Easing, ScrollView, Linking,Image ,FlatList, Modal,TouchableWithoutFeedback, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import ApiRequestHandler from './ApiRequestHandler';
import { Clipboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const BillScreen = ({ route, title, searchPlaceholder,  onPayBill,apiUrl }) => {
  const navigation = useNavigation();
  const animatedValue = new Animated.Value(0);
  const [showBill, setShowBill] = useState(false);
  const [showPaymentSlider, setShowPaymentSlider] = useState(false);
  const [searchResult, setSearchResult] = useState(null); // Added state for search result
  const [refference, setRefference] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [recentReferences, setRecentReferences] = useState([]);
  const [isRecentReferencesModalVisible, setRecentReferencesModalVisible] = useState(false);

  

  useEffect(() => {
    // Retrieve the last five reference numbers from AsyncStorage
    const retrieveRecentReferences = async () => {
      try {
        const storedReferences = await AsyncStorage.getItem('recentReferences');
        if (storedReferences) {
          const referencesArray = JSON.parse(storedReferences);
          setRecentReferences(referencesArray);
        }
      } catch (error) {
        console.error('Error retrieving recent references:', error);
      }
    };

    retrieveRecentReferences();
  }, []);

  const handleInputChange = (text) => {
    setRefference(text);
  };
   
  const apiHandler = ApiRequestHandler({
    apiUrl: `${apiUrl}/${refference}`,
    onSuccess: (data) => setApiResponse(data),
    onError: (error) => console.error('Error during API request:', error),
  });

  const startAnimation = async () => {
    if (!refference.trim()) {
      Alert.alert('Error', 'Please enter a reference number');
      return;
    }
  
    // Copy reference number to clipboard
    Clipboard.setString(refference);
  
    // Store reference number in AsyncStorage
    try {
      await AsyncStorage.setItem('lastReference', refference);
  
      // Update recent references array
      const newRecentReferences = [...recentReferences, refference].slice(-5);
      setRecentReferences(newRecentReferences);
      await AsyncStorage.setItem('recentReferences', JSON.stringify(newRecentReferences));
  
      console.log('Reference number stored successfully');
    } catch (error) {
      console.error('Error storing reference number:', error);
    }
  
    // Make the API request using the ApiRequestHandler
    apiHandler.makeApiRequest();
  
    // Start the animation
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(0);
      setShowBill(true);
    });
  };


  const showPaymentOptions = () => {
    setShowPaymentSlider(true);
  };

  const goBackToSearch = () => {
    setShowBill(false);
    setShowPaymentSlider(false);
  };

  const animatedStyle = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.2, 1],
        }),
      },
    ],
  };
  const openPaymentApp = (paymentMethod) => {
    // Use the paymentMethod to determine which app to open
    let appLink = '';
  
    // Example deep links, replace these with the actual deep links for the respective apps
    switch (paymentMethod) {
      case 'JazzCash':
        appLink = 'https://www.jazzcash.com.pk/deeplink'; // Replace with the actual deep link for JazzCash
        break;
      case 'Easypaisa':
        appLink = 'https://easypaisa.com.pk/bill-payments/'; // Replace with the actual deep link for Easypaisa
        break;
        case 'Allied Bank':
          appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
          break;
          case 'HBL Bank':
            appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
            break;
            case 'National Bank':
              appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
              break;
              case 'MCB Bank':
                appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
                break;
                case 'UBL Bank':
                  appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
                  break;
                  case 'Askari Bank':
                    appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
                    break;
                    case 'Meezan Bank':
                    appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
                    break;
                    case 'Alfala Bank':
                      appLink = 'easypaisa://'; // Replace with the actual deep link for Easypaisa
                      break;
      // Add more cases for other payment methods
      default:
        break;
    }
  
    Linking.canOpenURL(appLink).then((supported) => {
      if (supported) {
        Linking.openURL(appLink).catch((err) => {
          console.error(`Error opening ${paymentMethod} app: ${err}`);
        });
      } else {
        // Handle error or prompt the user to install the app
        console.error(`Cannot open ${paymentMethod} app`);
        Alert.alert(
          'Error',
          `Unable to open ${paymentMethod} app. Please try again later or use an alternative payment method.`,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        ); }
      });
  };
  const DownloadBill = () => {
    // Check if billUrl is present in the apiResponse
    const billUrl = apiResponse && apiResponse.billUrl;

    if (billUrl) {
      Linking.openURL(billUrl).catch((err) => {
        console.error('Error opening bill URL:', err);
      });
    } else {
      console.error('Bill URL not available in the API response');
    }
  };
  
  const openRecentReferencesModal = () => {
    setRecentReferencesModalVisible(true);
  };

  const closeRecentReferencesModal = () => {
    setRecentReferencesModalVisible(false);
  };

  const renderRecentReferenceItem = ({ item }) => (
    <TouchableOpacity
      style={styles.recentReferenceItem}
      onPress={() => {
        setRefference(item);
        closeRecentReferencesModal();
      }}
    >
      <Text style={styles.recentReferenceText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={closeRecentReferencesModal}>
    <View style={styles.container}>
      
        {showBill && (
          <View style={styles.headerButtonsContainer}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={DownloadBill}
            >
              <Text style={styles.headerButtonText}>Download </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => onPayBill(showPaymentOptions)}
            >
              <Text style={styles.headerButtonText}>Pay Bill</Text>
            </TouchableOpacity>
          </View>
        )}

        {!showBill ? (
          <>
          
          <View style={styles.card1}>
          <View style={styles.card2}>
            <View style={styles.card}>
            <View style={styles.headercard}>
            <Text style={styles.header}>{title}</Text>
            </View>
            <Text style={styles.referenceHeading}>{searchPlaceholder}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Type here..."
                placeholderTextColor="#888"
                 onChangeText={handleInputChange}
                 value={refference}
                 keyboardType='numeric'
                 onFocus={openRecentReferencesModal}
              />
            </View>
            <TouchableOpacity
              style={[styles.searchButton, animatedStyle]}
              onPress={startAnimation}
            >
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
            <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isRecentReferencesModalVisible}
                  onRequestClose={closeRecentReferencesModal}
                >
                  <TouchableWithoutFeedback onPress={closeRecentReferencesModal}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <Text style={styles.modalTitle}>Recent References</Text>
                      <FlatList
                        data={recentReferences}
                        renderItem={renderRecentReferenceItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                      <Pressable onPress={closeRecentReferencesModal}>
                        <Text style={styles.closeModalText}>Close</Text>
                      </Pressable>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>
                </Modal>
            </View>
            </View>
            </View>
          </>
        ) : (
          <ScrollView  
        >   
            {/* Display search result */}
            <ScrollView>
            <ScrollView  
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>   
            <WebView
  source={{ html: apiResponse || '<html><body><h1>Loading...</h1></body></html>' }}
  style={{ flex: 1, marginTop: 10, height: 500, width:340 }}
  onError={(syntheticEvent) => console.error('WebView error:', syntheticEvent.nativeEvent)}
  onLoad={() => console.log('WebView loaded')}
/>
</ScrollView>
</ScrollView>
<View style={styles.contentContainer}>


<TouchableOpacity
                  style={styles.goBackButton}
                  onPress={goBackToSearch}
                >
                  <Text style={styles.goBackButtonText}>Back to Search</Text>
                </TouchableOpacity>


            {/* Payment methods slider */}
            {showPaymentSlider && (
               <ScrollView
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               style={styles.paymentSlider}
             >
               {/* Display your payment methods here */}
               <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('JazzCash')}
          >
             <Image source={require('../assets/jc.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('Easypaisa')}
          >
             <Image source={require('../assets/ep.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('Meezan Bank ')}
          >
             <Image source={require('../assets/mb.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('Askari Bank')}
          >
             <Image source={require('../assets/as.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('UBL Bank')}
          >
             <Image source={require('../assets/ub.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('MCB Bank')}
          >
             <Image source={require('../assets/mc.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('National Bank')}
          >
             <Image source={require('../assets/np.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('Alfala Bank')}
          >
             <Image source={require('../assets/al.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('HBL Bank')}
          >
             <Image source={require('../assets/hbl.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentMethod}
            onPress={() => openPaymentApp('Allied Bank')}
          >
             <Image source={require('../assets/ald.png')} style={styles.paymentMethodImage} />
          </TouchableOpacity>
               {/* Add more payment methods as needed */}
             </ScrollView>
            )}
           
            </View>
          </ScrollView>
        )}
     



    </View>


    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  recentReferencesContainer: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  recentReferenceItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    marginTop:10,
    backgroundColor: '#12A031',
  },
  recentReferenceText: {
    color: '#fff',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  closeModalText: {
    color: '#12A031',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    marginBottom: 60,
  },
  contentContainer: {
    alignItems: 'center',
  },
  paymentSlider: {
    marginTop: 10,
    flexDirection: 'row',
    
    
  },
  paymentMethod: {
    
    borderRadius: 10,
    alignItems: 'center',
   padding:5,
  },
  paymentMethodImage: {
    
    height: 50,
    width: 50,
    borderRadius: 10,
    
    
    
  },
  card1: {
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#CE7D00', // White card background
    height:"90%",
    width:"90%",
  },
  card2: {
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#FFFFFF', // White card background
    height:"90%",
    width:"90%",
  },
  card: {
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#FEF9D9', // White card background
    height:"80%",
    width:"80%",
  },
  
  headerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginLeft:5,
    marginTop:5,
  },
  headerButton: {
    backgroundColor: '#12A031',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    
    marginRight: 10,
    width:100,
    height:40,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headercard: {
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 16,
    borderRadius: 30,
    elevation: 4,
    backgroundColor: '#ffff', // White card background
    height:"25%",
    width:"90%",
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
  referenceHeading: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
  inputContainer: {
    marginBottom: 10,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
    
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: '#333',
    width:"70%",
  },
  searchButton: {
    backgroundColor: '#12A031',
    
    borderRadius: 10,
    justifyContent:"center", 
    alignItems: 'center',
    width:"40%",
    height:"11%",
    marginTop:10,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  billText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  paymentSlider: {
    marginTop: 5,
  },
  goBackButton: {
    backgroundColor: '#12A031',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 6,
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default BillScreen;

