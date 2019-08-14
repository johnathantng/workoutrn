import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';

import { CardSection, StrictInput, Button } from './common';

const CreationForm = () => {
	const [genderValue, setGenderValue] = useState(genderValue)

	onGenderValueChange = (genderValue) => {
		setGenderValue(genderValue)
	}

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
					label="Age"
					placeholder="Enter Your Age"
					maxLength={2}
					keyboardType="number-pad"
				/>
			</CardSection>
			<CardSection>
				<StrictInput 
					label="Height"
					placeholder="Enter Your Height"
					maxLength={2}
					keyboardType="number-pad"
					endLabel="cm"
				/>
			</CardSection>
			<CardSection>
				<StrictInput 
					label="Weight"
					placeholder="Enter Your Weight"
					maxLength={3}
					keyboardType="number-pad"
					endLabel="kg"
				/>
			</CardSection>
			<CardSection>
				<Button> Create Account </Button>
			</CardSection>
		</View>
	);
};

const styles = {
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 2,
		color: '#352e30'
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	pickerStyle: {
		flex: 4,
		height: 40,
		width: 100,
		paddingLeft: 5,
		paddingRight: 5
	}
};

export default CreationForm;
