import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/navigation-screens/Home';
import About from './src/screens/navigation-screens/About';
import Login from './src/screens/navigation-screens/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: {
    username: string;
  };
  About: undefined;
  Login: undefined;
};

const NavigationApp = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              // Global styling
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: 'crimson',
              contentStyle: styles.screen,
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              //   options={{ // Specific screen styling
              //     title: 'Login Screen',
              //     headerTintColor: 'crimson',
              //     headerTitleStyle: {
              //       fontSize: 20,
              //     },
              //     headerStyle: {
              //       backgroundColor: 'pink',
              //     },
              //   }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default NavigationApp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    gap: 16,
  },
  screen: {
    backgroundColor: 'lightgreen',
  },
  header: {
    backgroundColor: 'yellow',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
