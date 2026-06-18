import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

const data = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 6' },
  { id: 7, title: 'Item 7' },
  { id: 8, title: 'Item 8' },
  { id: 9, title: 'Item 9' },
  { id: 10, title: 'Item 10' },
];

const FlatListScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>;
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        // data has to be an array with unique ids
        data={data}
        renderItem={renderItem}
        // we have to pass the unique id for react to track
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingTop: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: 'crimson',
    borderWidth: 4,
    borderColor: 'yellow',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    color: '#ffff',
    fontSize: 18,
  },
});

export default FlatListScreen;
