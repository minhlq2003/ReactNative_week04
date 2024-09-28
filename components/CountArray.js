import React , {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


function CountArray() {
    const [arr, setArr] = useState([1,2,3]);
    return ( 
        <View style={styles.container}>
            <Text style={styles.text} >useState:</Text>
            <Text style={styles.text}>{arr[0]}</Text>
            <Text style={styles.text}>{arr[1]}</Text>
            <Text style={styles.text}>{arr[2]}</Text>
            <Button onPress={()=>{
                arr.map((_, index) => arr[index] = arr[index] + 1);
                setArr([...arr]);
            }}>Add 1 for every element</Button>
            <Button onPress={()=>{setArr([1,2,3])} }>Reset</Button>
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

export default CountArray;