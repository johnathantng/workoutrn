import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, StrictInput, Spinner, Button } from './common';

const Workout = (props) => {
	const [genderValue, setGenderValue] = useState(genderValue);
	const [userAge, setUserAge] = useState('');
	const [userHeight, setUserHeight] = useState('');
	const [userWeight, setUserWeight] = useState('');
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(false);

	onGenderValueChange = (genderValue) => {
		setGenderValue(genderValue)
	}

	onUserAgeChange = (text) => {
		setUserAge(text);
	}
	
	onUserHeightChange = (text) => {
		setUserHeight(text);
	}

	onUserWeightChange = (text) => {
		setUserWeight(text);
	}

	hasError = () => {
		if (error) {
				return (
				<CardSection style={styles.errorContainer}>
					<Text style={styles.errorText}> Please Fill Out The Form With The Correct Information </Text>
				</CardSection>
			);
		}
	};

	renderCreateButton = () => {
		if (loading) {
			return (
				<CardSection>
					<Spinner />
				</CardSection>
			);
		} else {
			return (
				<CardSection>
					<Button onPress={() => onCreatePress()}> Create Account </Button>
				</CardSection>
			);
		}
	};

	onCreatePress = () => {
		isLoading(true);
		axios.post(`http://10.0.2.2:8685/profile/${props.user}`, {
			gender: genderValue,
			age: userAge,
			height: userHeight,
			weight: userWeight
		})
		.then(() => {
			isLoading(false);
			Actions.main({type: 'reset', user: props.user});
		})
		.catch(err => {
			setError(true);
			isLoading(false);
		})
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
					value={userAge}
					onChangeText={(text) => onUserAgeChange(text)}
					maxLength={2}
					keyboardType="number-pad"
				/>
			</CardSection>
			<CardSection>
				<StrictInput 
					label="Height"
					placeholder="Enter Your Height"
					value={userHeight}
					onChangeText={(text) => onUserHeightChange(text)}
					maxLength={3}
					keyboardType="number-pad"
					endLabel="cm"
				/>
			</CardSection>
			<CardSection>
				<StrictInput 
					label="Weight"
					placeholder="Enter Your Weight"
					value={userWeight}
					onChangeText={(text) => onUserWeightChange(text)}
					maxLength={3}
					keyboardType="number-pad"
					endLabel="kg"
				/>
			</CardSection>

			{renderCreateButton()}

			{hasError()}

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
	},	
	errorContainer: {
		justifyContent: 'center'
	},
	errorText: {
		color: 'red'
	}
};

export default Workout;
