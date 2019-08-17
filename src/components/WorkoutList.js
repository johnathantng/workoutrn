import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import { WorkoutCard } from './common';

const WorkoutList = (props) => {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		axios.get(`http://10.0.2.2:8685/profile/${props.user}/workouts`)
			.then(res => setWorkouts(res.data))
			.catch(err => console.log(err))
	}, [])

	renderWorkoutList = () => {
		return workouts.map(data => {
			console.log(data)
			return <WorkoutCard 
								key={data.workout_id} 
								workoutName={data.workout} 
								targetReps={data.target_reps}
								targetSets={data.target_sets}
							/>;
		});
	};

	return (
		<ScrollView>

			{renderWorkoutList()}

		</ScrollView>
	);
};

export default WorkoutList;
