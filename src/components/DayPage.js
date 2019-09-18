import React from 'react';
import { View, Text } from 'react-native';

import WorkoutList from './WorkoutList';

const DayPage = ({ dayName, totalCalories }) => {
    return (
        <View>
            <Text> Here is your summary for {dayName} </Text> 
            <Text> Your total calories for {dayName} is {totalCalories} </Text>
            <Text> Here are your exercises for today </Text>
            <WorkoutList />
        </View>
    );
};

const styles = {
	textStyle: {
		color: '#352e30'
	}
}

export default DayPage;