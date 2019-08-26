import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, StrictInput, Input, Spinner, Button } from './common';

const Workout = (props) => {
	const [mealName, setMealName] = useState('');
	const [caloriesValue, setCaloriesValue] = useState('');
	const [carbsValue, setCarbsValue] = useState('');
	const [proteinValue, setProteinValue] = useState('');
	const [fatValue, setFatValue] = useState('');
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(false);

	onMealNameChange = (text) => {
		setMealName(text);
	}

	onCaloriesValueChange = (text) => {
		setCaloriesValue(text);
	}

	onCarbsValueChange = (text) => {
		setCarbsValue(text);
	}

	onProteinValueChange = (text) => {
		setProteinValue(text);
	}

	onFatValueChange = (text) => {
		setFatValue(text);
	}

	hasError = () => {
		if (error) {
				return (
				<CardSection style={styles.errorContainer}>
					<Text style={styles.errorText}> Something Went Wrong </Text>
				</CardSection>
			);
		}
	};

	renderConfirmButton = () => {
		if (loading) {
			return (
				<CardSection>
					<Spinner />
				</CardSection>
			);
		} else {
			return (
				<CardSection>
					<Button onPress={() => onConfirmPress()}> Add Meal </Button>
				</CardSection>
			);
		}
	};

	onConfirmPress = () => {
		isLoading(true);
		axios.post(`http://10.0.2.2:8685/profile/${props.user}/meals/${mealName}`, {
			id: props.user,
			userName: props.userName,
			meal: mealName,
			carbs: carbsValue,
			protein: proteinValue,
			fat: fatValue,
			calories: caloriesValue
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
				<Input 
					label="Meal Name:"
					placeholder="Meal Name"
					value={mealName}
					onChangeText={(text) => onMealNameChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Calories:"
					placeholder="Total Calories"
					value={caloriesValue}
					maxLength={4}
					onChangeText={(text) => onCaloriesValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Carbs:"
					placeholder="Total Carbohydrates"
					value={carbsValue}
					maxLength={3}
					onChangeText={(text) => onCarbsValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Protein:"
					placeholder="Total Protein"
					value={proteinValue}
					maxLength={3}
					onChangeText={(text) => onProteinValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Fat:"
					placeholder="Total Fat"
					value={fatValue}
					maxLength={3}
					onChangeText={(text) => onFatValueChange(text)}
				/>
			</CardSection>

			{renderConfirmButton()}

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
