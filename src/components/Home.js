import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import WorkoutList from './WorkoutList';
import MealsList from './MealsList';
import NavBar from './NavBar';
import { CardSection, Button, ScreenSpinner, Menu } from './common';

const Home = (props) => {
	const [userName, setUserName] = useState('');
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

	renderAddButton = () => {
		if (toggle) {
			return <Button onPress={() => Actions.addMeal({user: props.user, userName: userName})}> Add Meal </Button>;
		} else {
			return <Button onPress={() => Actions.addWorkout({user: props.user, userName: userName})}> Add Workout </Button>;
		}
	}

	return (
		<View style={styles.containerStyle}>

			<Menu 
				labelButtonOne="Workouts" 
				labelButtonTwo="Meals"
				onPressButtonOne={() => onPressWorkouts()}
				onPressButtonTwo={() => onPressMeals()}
			/>

			{renderList()}

			<CardSection>
				{renderAddButton()}
			</CardSection>
			<NavBar homeOpacity={0.7} user={props.user} />
		</View>
	);
};

const styles = {
	containerStyle: {
		flex: 1
	},
	scrollViewStyle: {
		flex: 1
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
}

export default Home;
