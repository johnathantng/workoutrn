import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MealsCard = ({ onPress, onLongPress, mealName, mealCalories, mealCarbs, mealProtein, mealFat }) => {
	const { containerStyle, subCategoriesStyle, textHeaderStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
			<View style={containerStyle}>
				<Text style={textHeaderStyle}> {mealName} </Text>

				<Text style={textHeaderStyle}> Calories: {mealCalories} </Text>

				<View style={subCategoriesStyle}>
					<Text style={textStyle}> Carbs: {mealCarbs} </Text>
					<Text style={textStyle}> Protein: {mealProtein} </Text>
					<Text style={textStyle}> Fat: {mealFat} </Text>
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

export { MealsCard };