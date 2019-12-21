import React from 'react';
import { View, Text } from 'react-native';

const Hint = ({ hintMessage }) => {
	return (
		<View style={styles.boxStyle}> 
			<Text> Hint: </Text>
			<Text style={styles.textStyle}> {hintMessage} </Text>
		</View>
	);
}

const styles = {
	boxStyle: {
		flex: 1,
		position: 'absolute',
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: '#352e30',
		left: 0,
		bottom: 0
	}
}

export { Hint };