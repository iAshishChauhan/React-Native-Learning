import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Setup for Bottom Tabs
type RootTabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

// Components
const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

// functions
const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName: string = '';
  if (routeName === 'HomeScreen') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'ProfileScreen') {
    iconName = focused ? 'person' : 'person-outline';
  } else if (routeName === 'SettingsScreen') {
    iconName = focused ? 'settings' : 'settings-outline';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

const TabbarApp = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) =>
                getTabBarIcon(route.name, focused, color, size),
              tabBarActiveTintColor: '#007bff',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                paddingBottom: 5,
                height: 60,
              },
              headerShown: false,
            })}
          >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TabbarApp;

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
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
  },
});
