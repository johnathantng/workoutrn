import React from 'react';
import { View, Text } from 'react-native';

import WorkoutList from './WorkoutList';

const DayPage = ({ dayName, totalCalories }) => {
    return (
        <View>
            <Text style={styles.textStyle}> Here is your summary for {dayName} </Text> 
            <Text style={styles.textStyle}> Your total calories for {dayName} is {totalCalories} </Text>
            <Text style={styles.textStyle}> Here are your exercises for today </Text>
            <WorkoutList />
        </View>
    );
};

const styles = {
	textStyle: {
		color: '#352e30',
		fontSize: 18
	}
}

export default DayPage;