import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, StrictInput, Input, Spinner, Button } from './common';

const EditMeal = (props) => {
	const [mealName, setMealName] = useState(props.mealName);
	const [caloriesValue, setCaloriesValue] = useState(`${props.caloriesValue}`);
	const [carbsValue, setCarbsValue] = useState(`${props.carbsValue}`);
	const [proteinValue, setProteinValue] = useState(`${props.proteinValue}`);
	const [fatValue, setFatValue] = useState(`${props.fatValue}`);
	const [updateLoading, isUpdateLoading] = useState(false);
	const [deleteLoading, isDeleteLoading] = useState(false);
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

	renderUpdateButton = () => {
		if (updateLoading) {
			return (
				<CardSection>
					<Spinner />
				</CardSection>
			);
		} else {
			return (
				<CardSection>
					<Button onPress={() => onUpdatePress()}> Update </Button>
				</CardSection>
			);
		}
	};

	renderDeleteButton = () => {
		if (deleteLoading) {
			return (
				<CardSection>
					<Spinner />
				</CardSection>
			);
		} else {
			return (
				<CardSection>
					<Button onPress={() => onDeletePress()}> Delete </Button>
				</CardSection>
			);
		}
	};

	onUpdatePress = () => {
		isUpdateLoading(true);
		axios.put(`http://10.0.2.2:8685/profile/${props.user}/meals/${props.meal_id}`, {
			meal: mealName,
			calories: caloriesValue,
			carbs: carbsValue,
			protein: proteinValue,
			fat: fatValue
		})
		.then(() => {
			isUpdateLoading(false);
			Actions.main({type: 'reset', user: props.user});
		})
		.catch(err => {
			setError(true);
			isUpdateLoading(false);
		})
	}

	onDeletePress = () => {
		isDeleteLoading(true)
		axios.delete(`http://10.0.2.2:8685/profile/${props.user}/meals/${props.meal_id}`)
			.then(() => {
				isDeleteLoading(false);
				Actions.main({type: 'reset', user: props.user});
			})
			.catch(err => console.log(err))
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
					label="Calories Value:"
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

			{renderUpdateButton()}

			{renderDeleteButton()}

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

export default EditMeal;
