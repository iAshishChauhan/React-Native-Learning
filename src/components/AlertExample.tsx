import { View, Button, Alert } from 'react-native';
import React from 'react';

const AlertExample = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'This is a sample alert description for the presented alert',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('cancel');
          },
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            console.log('Ok');
          },
          style: 'default',
        },
      ],
      { cancelable: false },
    );
  };
  return (
    <View>
      <Button title="Show Alert" onPress={() => showAlert()} />
    </View>
  );
};

export default AlertExample;
