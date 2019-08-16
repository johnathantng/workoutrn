import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';


const WorkoutList = (props) => {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		axios.get(`http://10.0.2.2:8685/profile/${props.user}/workouts`)
			.then(res => setWorkouts(res.data))
			.catch(err => console.log(err))
	}, [])

	renderWorkoutList = () => {
		return workouts.map(data => {
			console.log(data.workout)
			return <Text> {data.workout} </Text>;
		});
	};

	return (
		<ScrollView>

			{renderWorkoutList()}

		</ScrollView>
	);
};

export default WorkoutList;
