import 'react-native-gesture-handler';
import { Text, StyleSheet, View, Button } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator<RootStackParamList>();

type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
};

type HomeProps = DrawerScreenProps<RootStackParamList, 'HomeScreen'>;
type ProfileProps = DrawerScreenProps<RootStackParamList, 'ProfileScreen'>;
type SettingsProps = DrawerScreenProps<RootStackParamList, 'SettingsScreen'>;

// This can be a separate component as well
const HomeScreen = ({ navigation }: HomeProps) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Home Screen</Text>
    <Button
      title="Open Drawer"
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  </View>
);

const ProfileScreen = ({ navigation }: ProfileProps) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Profile Screen</Text>
    <Button
      title="Open Profile"
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  </View>
);

const SettingsScreen = ({ navigation }: SettingsProps) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Settings Screen</Text>
    <Button
      title="Open Settings"
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  </View>
);

const DrawerApp = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#e6e6e6',
                width: 240,
              },
              drawerLabelStyle: {
                fontSize: 18,
                color: '#333',
              },
              headerStyle: {
                backgroundColor: '#6200EE',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DrawerApp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    gap: 16,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
