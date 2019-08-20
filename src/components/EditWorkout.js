import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, StrictInput, Input, Spinner, Button } from './common';

const EditWorkout = (props) => {
	const [workoutValue, setWorkoutValue] = useState(props.workoutName);
	const [typeValue, setTypeValue] = useState(props.workoutType);
	const [targetReps, setTargetReps] = useState(`${props.targetReps}`);
	const [targetSets, setTargetSets] = useState(`${props.targetSets}`);
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(false);

	onWorkoutValueChange = (text) => {
		setWorkoutValue(text);
	}

	onRepsValueChange = (text) => {
		setTargetReps(text);
	}

	onSetsValueChange = (text) => {
		setTargetSets(text);
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
		if (loading) {
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

	onUpdatePress = () => {
		isLoading(true);
		axios.post(`http://10.0.2.2:8685/profile/${props.user}/workouts/${workoutValue}`, {
			id: props.user,
			userName: props.userName,
			workoutName: workoutValue,
			workoutType: typeValue,
			workoutReps: targetReps,
			workoutSets: targetSets
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
					label="Workout:"
					placeholder="Exercise Name"
					value={workoutValue}
					onChangeText={(text) => onWorkoutValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<View style={styles.containerStyle}>
				<Text style={styles.labelStyle}>Type:</Text>
					<Picker
					  selectedValue={typeValue}
					  style={styles.pickerStyle}
					  onValueChange={(typeValue) => {
					  	if (typeValue != "0") {
								setTypeValue(typeValue)
					  	}
					  }
				  }>
				  	<Picker.Item label="Workout Type" value="0" />
					  <Picker.Item label="Strength" value="Strength" />
					  <Picker.Item label="Cardio" value="Cardio" />
					</Picker>
				</View>
			</CardSection>
			<CardSection>
				<Input 
					label="Target Reps:"
					placeholder="Amount of Reps"
					value={targetReps}
					maxLength={3}
					onChangeText={(text) => onRepsValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Target Sets:"
					placeholder="Amount of Sets"
					value={targetSets}
					maxLength={3}
					onChangeText={(text) => onSetsValueChange(text)}
				/>
			</CardSection>

			{renderUpdateButton()}

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

export default EditWorkout;
