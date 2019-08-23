import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, StrictInput, Input, Spinner, Button } from './common';

const EditWorkout = (props) => {
	const [workoutValue, setWorkoutValue] = useState(props.workoutName);
	const [typeValue, setTypeValue] = useState(props.workoutType);
	const [currentReps, setCurrentReps] = useState(`${props.currentReps}`);
	const [targetReps, setTargetReps] = useState(`${props.targetReps}`);
	const [currentSets, setCurrentSets] = useState(`${props.currentSets}`);
	const [targetSets, setTargetSets] = useState(`${props.targetSets}`);
	const [updateLoading, isUpdateLoading] = useState(false);
	const [deleteLoading, isDeleteLoading] = useState(false);
	const [error, setError] = useState(false);

	onWorkoutValueChange = (text) => {
		setWorkoutValue(text);
	}

	onCurrentRepsValueChange = (text) => {
		setCurrentReps(text);
	}

	onTargetRepsValueChange = (text) => {
		setTargetReps(text);
	}

	onCurrentSetsValueChange = (text) => {
		setCurrentSets(text);
	}

	onTargetSetsValueChange = (text) => {
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
		axios.put(`http://10.0.2.2:8685/profile/${props.user}/workouts/${props.workout_id}`, {
			workoutName: workoutValue,
			workoutType: typeValue,
			currentSets: currentSets,
			currentReps: currentReps,
			targetReps: targetReps,
			targetSets: targetSets
		})
		.then(() => {
			isUpdateLoading(false);
			Actions.main({type: 'reset', user: props.user});
		})
		.catch(err => {
			setError(true);
			isLoading(false);
		})
	}

	onDeletePress = () => {
		isDeleteLoading(true)
		axios.delete(`http://10.0.2.2:8685/profile/${props.user}/workouts/${props.workout_id}`)
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
					label="Current Reps:"
					placeholder="Amount of Reps"
					value={currentReps}
					maxLength={3}
					onChangeText={(text) => onCurrentRepsValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Target Reps:"
					placeholder="Amount of Reps"
					value={targetReps}
					maxLength={3}
					onChangeText={(text) => onTargetRepsValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Current Sets:"
					placeholder="Amount of Sets"
					value={currentSets}
					maxLength={3}
					onChangeText={(text) => onCurrentSetsValueChange(text)}
				/>
			</CardSection>
			<CardSection>
				<Input 
					label="Target Sets:"
					placeholder="Amount of Sets"
					value={targetSets}
					maxLength={3}
					onChangeText={(text) => onTargetSetsValueChange(text)}
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

export default EditWorkout;
