import React from 'react';
import { View, Text } from 'react-native';

const Alert = ({ errorNumber, children }) => {
	//alert for errors / server issues
	<View>
		<Text style={styles.textStyle}> Error number: {errorNumber} </Text>
		<Text style={styles.textStyle}> {children} </Text>
		<Text> Please wait while we try to get a response from the server </Text>
	</View>
}

const styles = {
	textStyle: {
		flex: 1,
		textAlign: 'center',
		color: '#352e30',
		position: 'absolute',
		left: 0,
		bottom: 0
	}
}

export { Alert };