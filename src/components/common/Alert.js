import React from 'react';
import { View, Text } from 'react-native';

const Alert = ({ errorNumber, children }) => {
	//alert for errors / server issues
	<View>
		<Text> Error: {errorNumber} </Text>
		<Text style={styles.textStyle}> {children} </Text>
	</View>
}

const styles = {
	textStyle: {
		flex: 1,
		textAlign: 'center',
		color: '#352e30'
	}
}

export { Alert };