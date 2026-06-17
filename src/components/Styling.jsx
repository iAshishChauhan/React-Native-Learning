/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import style from '../style/style';
import React from 'react';

const Styling = () => {
  return (
    <View>
      {/* Inline styling */}
      <Text
        style={{
          fontSize: 30,
          backgroundColor: 'crimson',
          color: 'white',
          padding: 16,
          margin: 16,
          textAlign: 'center',
        }}
      >
        Inline Styling
      </Text>
      {/* Internal Styling */}
      {/* Iske liye humko import karna padta hai StyleSheet and isko component k bahar banate hain */}
      <Text style={inlineStyle.text}>Internal Styling</Text>
      {/* External Styling */}
      {/* Agar same styling multiple compnents mei use karna hai to best practice is to create External styling */}
      {/* Iske liye ek alag folder and file bana lo style naam se and iska jo file hoga vo .js file hoga kyuki styling k andar js style objects hote hain*/}
      {/* And same ismei bhi StyleSheet create karenge bas alag specific file mei */}
      <Text style={style.text}>External Styling</Text>
    </View>
  );
};

// Main component k andar styling ho rhi hai isiliye ye Internal Styling hai
// Since sarei stylings objects k form mei hoti hai to create mei bhi object pass karenge
// ab iske andar jo bhi naam ka styling banana hai uska object bana lo
const inlineStyle = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'crimson',
    padding: 16,
    margin: 16,
    textAlign: 'center',
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default Styling;
