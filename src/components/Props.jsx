/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

// Props are used to send data from Parent component to Child component
// Just like we use Binding in SwiftUI

const Props = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Props</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Button title="Multiply Item" onPress={() => setItem(item * 10)} />
      {/* Ab iss count state variable ko child mei pass krne k liye kuch bhi naam likh sakte hain  */}
      {/* for example hum yaha par data use kar rhe hain and curly braces mei state var count ko pass kar denge */}
      {/* And child object mei props k andar hum isko props.data aise access kar lenge */}
      {/* Similarly we can pass multiple state variables */}
      <Child data={count} item={item} />
    </View>
  );
};

export default Props;
