import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'red'}
        hidden={false}
      />
      <Text>StatusBar</Text>
    </View>
  );
};

export default StatusBarExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200fe',
  },
});
