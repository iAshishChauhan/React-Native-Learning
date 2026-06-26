import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useRef } from 'react';
// UseRef hook humlog tab use karte hain jab humlogo ko kisi component ko directly target karna hota hai.
// Jab bhi hum kisi component ko target kar k manipulate karte hain to humara component re-render nahi hota hai.
const UseRefHook = () => {
  // myRef is instance of useRef() mtlab jo kaam useRef() karega vahi myRef karega i.e uski copy hai vo
  const textInputRef = useRef<TextInput>(null);
  const handleRef = () => {
    textInputRef.current?.focus();
    textInputRef.current?.setNativeProps({
      text: 'Ashish Chauhan',
      style: {
        color: '#fff',
        backgroundColor: 'crimson',
      },
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef} // iska mtlab iss component ki jitni bhi properties hain vo textInputRef mei aa chuka hai to manipulate.
        style={styles.input}
        placeholder="Enter your input"
        placeholderTextColor={'#999'}
      />
      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseRefHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3e5bea',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
