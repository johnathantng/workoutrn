import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import { WorkoutCard, ScreenSpinner, SelectModal } from './common';

const WorkoutList = (props) => {
	const [workouts, setWorkouts] = useState([]);
	const [loading, isLoading] = useState(false);
	const [modal, showModal] = useState(false);

	useEffect(() => {
		isLoading(true);
		axios.get(`http://10.0.2.2:8685/profile/${props.user}/workouts`)
			.then(res => {
				setWorkouts(res.data);
				isLoading(false);
			})
			.catch(err => isLoading(false));
	}, [])

	onPressEdit = () => {

	}

	onPressDelete = () => {

	}

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
									onPress={() => Actions.edit({
										user: props.user,
										workout_id: data.workout_id, 
										workoutName: data.workout,
										workoutType: data.type,
										targetReps: data.target_reps,
										targetSets: data.target_sets
									})}
									onLongPress={() => showModal(true)}
								/>;
			});
		}
	};



	return (
		<ScrollView>

			<SelectModal visible={modal} onBackgroundPress={() => showModal(false)} />

			{renderWorkoutList()}

		</ScrollView>
	);
};

export default WorkoutList;
