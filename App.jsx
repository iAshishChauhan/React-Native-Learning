import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

// import { Button, Text } from 'react-native'
// import First from './src/components/First'
// import JSX from './src/components/JSX'
// import OnPress from './src/components/OnPress'
// import UseStateHook from './src/components/UseStateHook'
// import Props from './src/components/Props'
// import InputText from './src/components/InputText';
// import Styling from './src/components/Styling';
// import FlatListScreen from './src/components/FlatListScreen';
// import SectionListScreen from './src/components/SectionListScreen';
// import LoginForm from './src/components/LoginForm';
// import ContactListScreen from './src/screens/contact/ContactListScreen';
// import Grid from './src/components/Grid';
// import ClassComponents from './src/components/ClassComponents';
// import UseEffectHook from './src/components/UseEffectHook';
import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* <Text style={{ fontSize: 30 }}>React native Developer</Text> */}
        {/* <Text style={{ fontSize: 30 }}>Ashish Singh Chauhan</Text> */}
        {/* <First/> */}
        {/* <JSX/> */}
        {/* <OnPress/> */}
        {/* <UseStateHook/> */}
        {/* <Props /> */}
        {/* <InputText /> */}
        {/* <Styling /> */}
        {/* <FlatListScreen /> */}
        {/* <SectionListScreen /> */}
        {/* <LoginForm /> */}
        {/* <ContactListScreen /> */}
        {/* <Grid /> */}
        {/* <ClassComponents age={30} /> */}
        {/* <UseEffectHook /> */}
        <UseEffectHookUpdatingPhase />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    gap: 16,
  },
});

export default App;
