import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { RootStackParamList } from '../../../StackNavigationApp';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
  const [userName, setUserName] = useState('');
  return (
    <View>
      <TextInput placeholder="Enter username" onChangeText={setUserName} />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Home', { username: userName });
        }}
      />
    </View>
  );
};

export default Login;
