import React from 'react';
import { View, Text } from 'react-native';

const Alert = ({ errorNumber, children }) => {
	//alert for errors / server issues
	<View>
		<Text> Error: {errorNumber} </Text>
		<Text> {children} </Text>
	</View>
}

export { Alert };