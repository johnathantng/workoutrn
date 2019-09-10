import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const DayCard = ({ onPress, onLongPress, dayName, dayCalories, dayWorkoutCount }) => {
	const { containerStyle, subCategoriesStyle, textHeaderStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
			<View style={containerStyle}>
				<Text style={textHeaderStyle}> {dayName} </Text>
				<Text> Total Calories: {dayCalories} </Text>
				<Text> Total Workouts: {dayWorkoutCount} </Text>
			</View>
		</TouchableOpacity>
	);
}

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
		marginTop: 5,
		marginBottom: 5
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

export { DayCard };