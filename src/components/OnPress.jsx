/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';

const OnPress = () => {
  let name = 'Ashish';
  const getName = () => {
    // Below code doesn't update the UI but the variable name has value as Chauhan now.
    // To solve this problem we will see UseStateHook
    name = 'Chauhan';
    console.log('Ashish:: OnPress Called');
  };
  const getNameWithParam = name => {
    console.log('Ashish:: OnPress Called With Name', name);
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button title="Press" onPress={getName} />
      {/* <Button title='Press' onPress={ () => getNameWithParam('Ashish') }/> */}
    </View>
  );
};

export default OnPress;
