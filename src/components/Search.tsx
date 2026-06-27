import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

interface Contact {
  id: string;
  name: string;
}

const Search = () => {
  const contacts = [
    { id: '1', name: 'Ashish' },
    { id: '2', name: 'Ayush' },
    { id: '3', name: 'Bhodu' },
    { id: '4', name: 'Gitanjali' },
    { id: '5', name: 'Shilpi' },
    { id: '6', name: 'Deepu' },
  ];
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const renderItem = ({ item }: { item: Contact }) => {
    return (
      <View style={styles.contactItem}>
        <Text style={styles.contactName}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.contactListTitle}>Contact List</Text>
      <TextInput
        placeholder="Search Contacts..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.textInput}
      />
      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  contactListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e88e5',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    height: 40,
    borderColor: '#90caf9',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 20,
  },
  contactItem: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 20,
    borderColor: '#90caf9',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#90caf9',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
  },
});
