import React from 'react';
import { View, Text } from 'react-native';

const Hint = () => {
	return (
		<View style={styles.boxStyle}> 
			<Text> Test </Text>
		</View>
	);
}

const styles = {
	boxStyle: {
		flex: 1
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		position: 'absolute',
		color: '#352e30',
		left: 0,
		bottom: 0
	}
}

export { Hint };