import { StyleSheet, View, TextInput } from 'react-native';

export default function CalculatorScreen({ style }) {
	return (
		<View style={[styles.container, style]}>
			<TextInput style={styles.input}>0</TextInput>
			<TextInput style={styles.input}>0</TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'lightsteelblue',
	},
	input: {
		textAlign: 'right',
		fontSize: 40,
		fontWeight: 'bold',
	}
});
