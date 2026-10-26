import { StyleSheet, View, Pressable, Text } from 'react-native';

function CalculatorButton({ title }) {
	if (title === null) {
		return <View style={styles.button}></View>
	}
	const func = () => console.debug("Button pressed: " + title)
	return (
		<Pressable style={styles.button} onPress={func}>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	)
}

function Row({ items }) {
	return (
		<View style={styles.row}>
			{items.map((buttonValue, index) => <CalculatorButton key={index} title={buttonValue} />)}
		</View>
	)
}

export default function CalculatorKeyboard({ style }) {
	let KEYBOARD = [['7', '8', '9', 'C', 'AC'],
	['4', '5', '6', '+', '-'],
	['1', '2', '3', '*', '%'],
	['0', '.', '00', '=', null]]
	return (
		<View style={style} >
			{KEYBOARD.map((value, index) => <Row key={index} items={value} />)}
		</View >
	);
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'steelblue',
		borderWidth: 1,
	},
	buttonText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	}
});
