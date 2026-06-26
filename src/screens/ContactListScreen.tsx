import { FlatList, Text } from 'react-native';
import React from 'react';
import { users, User } from './contact/userContactInfo';
import ContactItem from '../components/ContactItem';
import { styles } from './contact/style';

const ContactListScreen = () => {
  const renderItem = ({ item }: { item: User }) => (
    <ContactItem name={item.name} email={item.email} />
  );
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      ListHeaderComponent={<Text style={styles.heading}>Contacts</Text>}
    />
  );
};

export default ContactListScreen;
