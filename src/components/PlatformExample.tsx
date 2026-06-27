import { View, Text, Platform, StyleSheet } from 'react-native';
import React from 'react';

const PlatformExample = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        {Platform.OS === 'ios' ? 'Welcome iOS user!' : 'Welcome Android user!'}
      </Text>
      <Text>
        {Platform.select({
          ios: 'You are using iOS device',
          android: 'You are using Android device',
          macos: 'You are using MacOS device',
        })}
      </Text>
    </View>
  );
};

export default PlatformExample;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.select({
      ios: 'crimson',
      android: 'cyan',
    }),
  },
  text: {
    color: Platform.OS === 'ios' ? 'green' : 'bluw',
  },
});
