/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
// Just like swiftUI, hum JSX block mei sirf expressions likh sakte hain
// jismei kuch return ho rha ho. Plain statements nahi likhe sakte
// For example hum ek function ko call kr sakte hain but define nahi kar sakte
// inside the {}
const JSX = () => {
  let name = 'JSX -> Javascript Syntax Extension';
  const getAge = () => {
    return 28;
  };
  return (
    <View>
      {/* /* JSX k andar jo bhi CSS ki properties hoti hain vo objects k form mei hoti hai */}
      {/* Isilite style={} mtlab style mei ek JSX code pass karenge and uske andar vale { } denotes CSS object */}
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Text>My Age is {getAge()}</Text>
    </View>
  );
};

export default JSX;
