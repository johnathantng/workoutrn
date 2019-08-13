import React from 'react';
import { View, TextInput } from 'react-native';

import { CardSection, StrictInput } from './common';

const CreationForm = () => {
	return (
		<View>
			<CardSection>
				<StrictInput 
					label="age"
					placeholder="enter your age"
					maxLength={2}
					keyboardType="number-pad"
				/>
			</CardSection>
			<CardSection>
				<StrictInput 
					label="height"
					placeholder="enter your height"
					maxLength={2}
					keyboardType="number-pad"
				/>
			</CardSection>
			<CardSection>
				<StrictInput 
					label="weight"
					placeholder="enter your weight"
					maxLength={3}
					keyboardType="number-pad"
				/>
			</CardSection>
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
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		color: '#352e30'
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export default CreationForm;
