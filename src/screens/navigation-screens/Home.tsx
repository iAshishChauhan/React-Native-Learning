import { View, Text, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../NavigationApp';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation, route }: Props) => {
  const { username } = route.params;
  return (
    <View>
      <Text>Home</Text>
      <Text>{username}</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default Home;
