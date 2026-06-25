/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const UseStateHook = () => {
  // Hooks are APIs provided by React to be used in functional based components like useState for managing states
  // like useEffect for managing life cycle
  // Array de-structuring concept here:
  // useState() -> gives two things: 1. variable name to observe 2. setter to update the value and UI
  // Default value of variable can be passed to useState hook like below:
  const [name, setName] = useState('Ashish');
  const updateName = () => {
    setName('Chauhan');
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>UseStateHook</Text>
      <Text style={{ fontSize: 24 }}>{name}</Text>
      {/* <Button title='Press to change name' onPress={ () => setName('Chauhan') }/> */}
      <Button title="Press to change name" onPress={updateName} />
    </View>
  );
};

export default UseStateHook;
