import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import WorkoutList from './WorkoutList';
import MealsList from './MealsList';
import { Menu, Button } from './common';

const DayPage = ({ dayName, totalCalories, ...props }) => {
    const [toggle, toggleDisplay] = useState(false);

    useEffect(() => {
        axios.get(`http://10.0.2.2:8685/profile/${props.user}`)
            .then(user => {
                setUserName(user.data.username);
            })
            .catch(err => res.json('something went wrong'))
    }, [])

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

    renderHeader = () => {
        if (toggle) {
            return <Text style={styles.textStyle}> Here are your meals for today! </Text>
        } else {
            return <Text style={styles.textStyle}> Here are your exercises for today! </Text>
        }
    }

    pressUpdateButton = () => {
        // placeholder
    }

    pressDeleteButton = () => {
        //placeholder
    }

    return (
        <View>
            <Text style={styles.headerStyle}> Here is your summary for {dayName} </Text> 
            <Text style={styles.textStyle}> Your total calories for {dayName} is {totalCalories} </Text>
            <Menu 
                labelButtonOne="Workouts" 
                labelButtonTwo="Meals"
                onPressButtonOne={() => onPressWorkouts()}
                onPressButtonTwo={() => onPressMeals()}
            />

            {renderHeader()}

            {renderList()}

            <Button onPress={() => pressUpdateButton()}> Update </Button>

            <Button onPress={() => pressDeleteButton()}> Delete All </Button>
            
        </View>
    );
};

const styles = {
	textStyle: {
		color: '#352e30',
		fontSize: 18,
        textAlign: 'center'
	}
    headerStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}

export default DayPage;