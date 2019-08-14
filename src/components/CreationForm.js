import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';

import { CardSection, StrictInput } from './common';

const CreationForm = () => {
	const [genderValue, setGenderValue] = useState(genderValue)

	onGenderValueChange = (genderValue) => {
		setGenderValue(genderValue)
	}

	console.log(genderValue);
	return (
		<View>
			<CardSection>
				<View style={styles.containerStyle}>
				<Text style={styles.labelStyle}>Gender</Text>
					<Picker
					  selectedValue={genderValue}
					  style={styles.pickerStyle}
					  onValueChange={(genderValue) => {
					  	if (genderValue != "0") {
								setGenderValue(genderValue)
					  	}
					  }
				  }>
				  	<Picker.Item label="Select Your Gender" value="0" />
					  <Picker.Item label="Male" value="Male" />
					  <Picker.Item label="Female" value="Female" />
					  <Picker.Item label="Transgender" value="Transgender" />
					  <Picker.Item label="Non-binary" value="Non-binary" />
					</Picker>
				</View>
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
	},
	pickerStyle: {
		flex: 2,
		height: 40,
		width: 100,
		paddingRight: 5,
		paddingLeft: 5
	}
};

export default CreationForm;
