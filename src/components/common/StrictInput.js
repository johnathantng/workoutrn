import React from 'react';
import { View, Text, TextInput } from 'react-native';

const StrictInput = ({ label, endLabel, value, onChangeText, placeholder, secureTextEntry, maxLength, keyboardType }) => {
	const { inputStyle, labelStyle, containerStyle, endLabelStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				maxLength={maxLength}
				keyboardType={keyboardType}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
			<Text style={endLabelStyle}>{endLabel}</Text>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 3
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 2,
		color: '#352e30'
	},
	endLabelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		color: '#352e30',
		opacity: 0.5
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { StrictInput };