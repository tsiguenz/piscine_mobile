import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	let text = 'A simple text'
	let [press, setPress] = useState(false)
	if (press === true) {
		text = 'Hello World!'
	}
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title='Click me' onPress={() => setPress(!press)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
