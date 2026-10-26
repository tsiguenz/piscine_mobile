import { StyleSheet, View } from 'react-native'
import CalculatorScreen from './CalculatorScreen';
import CalculatorKeyboard from './CalculatorKeyboard';

export default function Calculator({ style }) {
	return (
		<View style={style}>
			<CalculatorScreen style={styles.screen} />
			<CalculatorKeyboard style={styles.keyboard} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 2,
	},
	keyboard: {
		flex: 5
	},

})