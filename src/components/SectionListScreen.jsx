import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'Fruits',
    data: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Mango' },
      { id: 3, name: 'Orange' },
      { id: 4, name: 'Banana' },
    ],
  },
  {
    title: 'Vegetables',
    data: [
      { id: 1, name: 'Potato' },
      { id: 2, name: 'Carrot' },
      { id: 3, name: 'Chilli' },
    ],
  },
];

const SectionListScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{section.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  item: {
    backgroundColor: '#add8e6',
    padding: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
  },
  header: {
    backgroundColor: '#90ee90',
    padding: 8,
    borderRadius: 4,
    marginVertical: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SectionListScreen;
