import React from 'react';
import { View } from 'react-native';

import { CardSection, Input } from './common';

const CreationForm = () => {
	return (
		<View>
			<CardSection>
				<Input 
					label="weight" 
					placeholder="enter your weight"
				/>
			</CardSection>
		</View>
	);
};

export default CreationForm;
