import { View, Text, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../NavigationApp';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

const About = ({ navigation }: Props) => {
  return (
    <View>
      <Text>About</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default About;
