import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setLoading(!loading)}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Hide Loader' : 'Show Loader'}
        </Text>
      </TouchableOpacity>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="#4CAF50" size={'large'} />
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loaderContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
});
