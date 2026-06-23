import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../screens/contact/style';

interface ContactItemProps {
  name: string;
  email: string;
}

const ContactItem = ({ name, email }: ContactItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default ContactItem;
