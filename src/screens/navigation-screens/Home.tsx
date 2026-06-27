import { View, Text, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../NavigationApp';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default Home;
