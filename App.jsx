/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import First from './src/components/First'
import JSX from './src/components/JSX'
import OnPress from './src/components/OnPress'
import UseStateHook from './src/components/UseStateHook'

const App = () => {
  return (
    <View style={ { padding: 16 } }>
      <SafeAreaView style={{ gap: 16}}>
        <Text style={{ fontSize: 30 }}>React native Developer</Text>
        <Text style={{ fontSize: 30 }}>Ashish Singh Chauhan</Text>
        <First/>
        <JSX/>
        <OnPress/>
        <UseStateHook/>
      </SafeAreaView>
    </View>
  )
}

export default App