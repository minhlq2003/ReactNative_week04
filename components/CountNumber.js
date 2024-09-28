import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function CountNumber() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text} >useState:</Text>
      <Text style={styles.text}>{count}</Text>
      <Button onPress={()=>{setCount(count+1)}}>increase</Button>
      <Button onPress={()=>{setCount(count-1)}}>decrease</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    fontSize: 30,
    marginBottom: 24,
  },
});
