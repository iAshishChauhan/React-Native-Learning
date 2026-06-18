/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
// import { Button, Text } from 'react-native'
// import First from './src/components/First'
// import JSX from './src/components/JSX'
// import OnPress from './src/components/OnPress'
// import UseStateHook from './src/components/UseStateHook'
// import Props from './src/components/Props'
// import InputText from './src/components/InputText';
// import Styling from './src/components/Styling';
import FlatListScreen from './src/components/FlatListScreen';

const App = () => {
  return (
    <View>
      <SafeAreaView style={{ gap: 16 }}>
        {/* <Text style={{ fontSize: 30 }}>React native Developer</Text> */}
        {/* <Text style={{ fontSize: 30 }}>Ashish Singh Chauhan</Text> */}
        {/* <First/> */}
        {/* <JSX/> */}
        {/* <OnPress/> */}
        {/* <UseStateHook/> */}
        {/* <Props /> */}
        {/* <InputText /> */}
        {/* <Styling /> */}
        <FlatListScreen />
      </SafeAreaView>
    </View>
  );
};

export default App;
