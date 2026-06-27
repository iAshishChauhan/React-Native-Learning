import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Setup for tabs
type RootTabParamList = {
  Chat: undefined;
  Status: undefined;
  Call: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

// components
const ChatScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Chat Screen</Text>
  </View>
);

const StatusScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Status Screen</Text>
  </View>
);

const CallScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Call Screen</Text>
  </View>
);

const TopTabNavigation = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#007bff',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                backgroundColor: '#ffff',
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#007bff',
                height: 5,
              },
              tabBarLabelStyle: {
                fontSize: 18,
                fontWeight: 'bold',
              },
            }}
          >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Status" component={StatusScreen} />
            <Tab.Screen name="Call" component={CallScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    gap: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
  },
});
