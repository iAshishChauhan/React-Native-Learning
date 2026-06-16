/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <View>
      <SafeAreaView>
        <Text style={{ fontSize: 30 }}>React native Developer</Text>
        <Text style={{ fontSize: 30 }}>Ashish Chauhan</Text>
        <Button title='Press here.'/>
      </SafeAreaView>
    </View>
  )
}

export default App