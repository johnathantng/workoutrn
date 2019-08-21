import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const WorkoutCard = ({ onPress, onLongPress, workoutName, targetReps, targetSets }) => {
	const { containerStyle, subCategoriesStyle, textHeaderStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
			<View style={containerStyle}>
				<Text style={textHeaderStyle}> {workoutName} </Text>

				<View style={subCategoriesStyle}>
					<Text style={textStyle}> Current Reps: 0 </Text>
					<Text style={textStyle}> Current Sets: 0 </Text>
				</View>

				<View style={subCategoriesStyle}>
					<Text style={textStyle}> Target Reps: {targetReps} </Text>
					<Text style={textStyle}> Target Sets: {targetSets} </Text>
				</View>

			</View>
		</TouchableOpacity>
	);
};

const styles = {
	containerStyle: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
	subCategoriesStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 20
	},
	textHeaderStyle: {
		textAlign: 'center',
		fontSize: 18,
		color: '#352e30'
	},
	textStyle: {
		marginTop: 10,
		marginBottom: 10,
		textAlign: 'center'
	}
};

export { WorkoutCard };