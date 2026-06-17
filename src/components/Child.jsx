/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

const Child = props => {
  let count = props.data;
  let items = props.item;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Count: {count}</Text>
      <Text style={{ fontSize: 30 }}>Item: {items}</Text>
    </View>
  );
};

export default Child;
