import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHookUnmountingPhase = () => {
  const [showChild, setShowChild] = useState(true);
  return (
    <View>
      <Text>Parent Component</Text>
      {showChild ? <ShowChild /> : null}
      <Button
        title="ToggleShowChild"
        onPress={() => setShowChild(!showChild)}
      />
    </View>
  );
};

const ShowChild = () => {
  useEffect(() => {
    console.log('Child Component mounted');
    return () => {
      console.log('Child Component unmounted');
    };
  }, []);
  return (
    <View>
      <Text>Child Component</Text>
    </View>
  );
};

export default UseEffectHookUnmountingPhase;
