import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import { WorkoutCard, ScreenSpinner } from './common';

const WorkoutList = (props) => {
	const [workouts, setWorkouts] = useState([]);
	const [loading, isLoading] = useState(false);

	useEffect(() => {
		isLoading(true);
		axios.get(`http://10.0.2.2:8685/profile/${props.user}/workouts`)
			.then(res => {
				setWorkouts(res.data);
				isLoading(false);
			})
			.catch(err => isLoading(false));
	}, [])

	renderWorkoutList = () => {
		if (loading) {
			return <ScreenSpinner />
		} else {
			return workouts.map(data => {
				return <WorkoutCard 
									key={data.workout_id} 
									workoutName={data.workout} 
									targetReps={data.target_reps}
									targetSets={data.target_sets}
								/>;
			});
		}
	};

	return (
		<ScrollView>

			{renderWorkoutList()}

		</ScrollView>
	);
};

export default WorkoutList;
