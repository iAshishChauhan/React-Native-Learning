import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const StyleWithButton = () => {
  return (
    <View>
      <Button title="BasicButton" />
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#3A1078"
        onPress={() => {
          console.log('TouchableHighlight button pressed');
        }}
      >
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#4E31AA',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StyleWithButton;
