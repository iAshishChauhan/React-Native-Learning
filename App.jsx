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
// import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase';
// import UseEffectHookUnmountingPhase from './src/components/UseEffectHookUnmountingPhase';
// import StyleWithButton from './src/components/StyleWithButton';
// import Loader from './src/components/Loader';
// import StatusBarExample from './src/components/StatusBarExample';
// import UseRefHook from './src/components/UseRefHook';
// import ModalDialogBox from './src/components/ModalDialogBox';
// import AlertExample from './src/components/AlertExample';
// import GET_API from './src/components/GET_API';
import POST_API from './src/components/POST_API';

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
        {/* <UseEffectHookUpdatingPhase /> */}
        {/* <UseEffectHookUnmountingPhase /> */}
        {/* <StyleWithButton /> */}
        {/* <Loader /> */}
        {/* <StatusBarExample /> */}
        {/* <UseRefHook /> */}
        {/* <ModalDialogBox /> */}
        {/* <AlertExample /> */}
        {/* <GET_API /> */}
        <POST_API />
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
