import React from 'react';
import { View, Text } from 'react-native';

const Hint = () => {
	return (
		<View> 
			<Text> Test </Text>
		</View>
	);
}

const styles = {
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