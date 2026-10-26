import { StyleSheet } from 'react-native';
import {
	initialWindowMetrics,
	SafeAreaProvider,
	SafeAreaView,
} from 'react-native-safe-area-context';
import Header from './components/Header';
import Calculator from './components/Calculator';

export default function App() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<SafeAreaView style={styles.container}>
				<Header style={styles.header} />
				<Calculator style={styles.calculator} />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 1,
		alignContent: 'center',
	},
	calculator: {
		flex: 8,
	},
});
