import { StyleSheet, Text, View } from 'react-native';

export default function Header({ style }) {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.title}>Calculator</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'steelblue',
	},
	title: {
		textAlign: 'center',
		color: 'white',
		fontSize: 40,
		fontWeight: 'bold'
	}
});
