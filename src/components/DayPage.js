import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import WorkoutList from './WorkoutList';
import MealsList from './MealsList';
import { Menu } from './common';

const DayPage = ({ dayName, totalCalories, ...props }) => {
    const [toggle, toggleDisplay] = useState(false);

    onPressWorkouts = () => {
        toggleDisplay(false);
    }

    onPressMeals = () => {
        toggleDisplay(true);
    }

    renderList = () => {
        if (toggle) {
            return <MealsList user={props.user} />;
        } else {
            return <WorkoutList user={props.user} />;
        }
    }

    return (
        <View>
            <Text style={styles.textStyle}> Here is your summary for {dayName} </Text> 
            <Text style={styles.textStyle}> Your total calories for {dayName} is {totalCalories} </Text>
            <Text style={styles.textStyle}> Here are your exercises and meals for today </Text>
            <Menu 
                labelButtonOne="Workouts" 
                labelButtonTwo="Meals"
                onPressButtonOne={() => onPressWorkouts()}
                onPressButtonTwo={() => onPressMeals()}
            />

            {renderList()}
            
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