/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
// useEffect hook k andar javascript ka callback function ka concept lagta hai
// callback function is a function which is called/used inside other function
const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  // UI k mount hone se pehle agar koi operation krna hai jaise API calls ya user login check
  // to vo sarei kaam humlog useEffect mei karenge taaki component k render hone se pehle hum vo kaam kr le
  // useEffect hook k andar sarei life cycle methods hote hain
  // Ye useEffect har bar call hoga jab bhi state se ui update hoga ya mount hoga and koi bhi state change hoga
  // Isko sirf ek bar call karane k liye - yani sirf mounting k time call karane k liye hum [] pass karenge in useEffect(()=>{}, [])
  useEffect(() => {
    console.log('This is useEffectHook');
  }, []);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>UseEffectHook</Text>
      <Text style={{ fontSize: 30 }}>Counter: {count}</Text>
      <Button title="Increment counnter" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseEffectHook;
