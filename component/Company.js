import React from 'react';
import {  StyleSheet, View, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

// Create a reusable BillScreen component
const Company = ({ name, image, desc, screen }) => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate(screen);
  };

  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Image style={styles.cardImage} source={image} />
        <View style={styles.detailsContainer}>
          <Title style={styles.name}>{name}</Title>
          <Paragraph style={styles.desc}>{desc}</Paragraph>
          <Button
            mode="contained"
            onPress={handleButtonClick}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Show Bill
          </Button>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
 
  card: {
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#FFFFFF', // White card background
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333', // Dark text color
  },
  desc: {
    fontSize: 10,
    marginBottom: 5,
    color: '#666666', // Medium gray text color
  },
  button: {
    backgroundColor: '#12A031', // Green button color
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  buttonLabel: {
    color: '#FFFFFF', // White button text color
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Company;
