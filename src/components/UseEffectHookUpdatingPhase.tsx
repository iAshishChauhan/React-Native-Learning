import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

// dono button k press par jaise hi component updating phase mei jayega after state change then useEffect firse call ho jayega
const UseEffectHookUpdatingPhase = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(100);

  useEffect(() => {
    console.log('useEffect Hook for Count');
  }, [count]); // ab sirf count vale state change pr useEffect call hoga and score pr nahi.
  // Also ye mounting k time to humesha hi chalega
  useEffect(() => {
    console.log('useEffect Hook for Score');
  }, [score]);

  return (
    <View>
      <Text>UseEffectHookUpdatingPhase</Text>
      <Text>Counter: {count}</Text>
      <Text>Score: {score}</Text>
      <Button title="SetCount" onPress={() => setCount(count + 1)} />
      <Button title="SetScore" onPress={() => setScore(score + 50)} />
      <InfoDetail counter={count} points={score} />
    </View>
  );
};

const InfoDetail = ({
  counter,
  points,
}: {
  counter: number;
  points: number;
}) => {
  useEffect(() => {
    console.log('useEffect Hook for InfoDetail');
  }, [counter]);
  return (
    <View>
      <Text>InfoDetail Child Component</Text>
      <Text>Counter: {counter}</Text>
      <Text>Points: {points}</Text>
    </View>
  );
};

export default UseEffectHookUpdatingPhase;
