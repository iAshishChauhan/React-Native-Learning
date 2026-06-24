/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
// Short cut is -> rnce from ES7+ extension
// styling functional based components ki tareh hi denge
// class based components k under states hum constructor k andar banate hain

interface Props {
  age: number;
}

interface State {
  name: string;
}

class ClassComponents extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Ashish',
    };
  }
  updateName = () => {
    this.setState({ name: 'Ali' });
  };
  render() {
    console.log('Rendering ClassComponents');
    return (
      <View>
        <Text style={{ fontSize: 20 }}>
          Name: {this.state.name} Age: {this.props.age}
        </Text>
        <Button title="Update Name" onPress={this.updateName} />
      </View>
    );
  }
}

export default ClassComponents;
