import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const POST_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });
  const handleInput = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/users',
        formData,
      );
      console.log(response.data);
      Alert.alert('Success!', 'Data submitted successfully');
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Error!', `Failed to submit data, ${error}`);
    }
  };
  return (
    <View>
      <Text>POST_API</Text>
      <TextInput
        placeholder="Enter id"
        value={formData.id}
        onChangeText={value => handleInput('id', value)}
      />
      <TextInput
        placeholder="Enter name"
        value={formData.name}
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        placeholder="Enter email"
        value={formData.email}
        onChangeText={value => handleInput('email', value)}
      />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </View>
  );
};

export default POST_API;
