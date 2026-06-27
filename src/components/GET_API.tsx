import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
  const [myData, setMyData] = useState<User[]>([]);
  useEffect(() => {
    axios.get<User[]>('http://localhost:3000/users').then(result => {
      setMyData(result.data);
    });
  }, []);
  return (
    <View>
      <Text>GET API METHOD</Text>
      {myData.map(item => {
        return <Text>{item.name}</Text>;
      })}
    </View>
  );
};

interface User {
  id: string;
  name: string;
  email: string;
}

export default GET_API;
