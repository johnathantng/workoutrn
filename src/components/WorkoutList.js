import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import { WorkoutCard, ScreenSpinner, SelectModal } from './common';

const WorkoutList = (props) => {
	const [workouts, setWorkouts] = useState([]);
	const [targetUserId, setTargetUserId] = useState('');
	const [targetWorkout, setTargetWorkout] = useState('');
	const [loading, isLoading] = useState(false);
	const [modal, showModal] = useState(false);

	useEffect(() => {
		isLoading(true);
		axios.get(`http://10.0.2.2:8685/profile/${props.user}/workouts`)
			.then(res => {
				setWorkouts(res.data.reverse());
				isLoading(false);
			})
			.catch(err => isLoading(false));
	}, [])

	onPressEdit = () => {
		showModal(false);
		axios.get(`http://10.0.2.2:8685/profile/${targetUserId}/workouts/${targetWorkout}`)
			.then(res => Actions.edit({
				user: props.user,
				workout_id: res.data.workout_id,
				workoutName: res.data.workout,
				workoutType: res.data.type,
				targetReps: res.data.target_reps,
				targetSets: res.data.target_sets
			}))
			.catch(err => console.log(err))
	}

	onPressDelete = () => {
		showModal(false);
		axios.delete(`http://10.0.2.2:8685/profile/${targetUserId}/workouts/${targetWorkout}`)
			.then(() => Actions.main({type: 'reset', user: props.user}))
			.catch(err => console.log(err))
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
									onLongPress={() => {
										showModal(true);
										axios.get(`http://10.0.2.2:8685/profile/${props.user}/workouts/${data.workout_id}`)
											.then(res => {
												setTargetUserId(res.data.id);
												setTargetWorkout(res.data.workout_id);
											})
											.catch(err => console.log(err))
									}}
								/>;
			});
		}
	};



	return (
		<ScrollView>

			<SelectModal 
				visible={modal} 
				onBackgroundPress={() => showModal(false)} 
				onPressEdit={() => onPressEdit()}
				onPressDelete={() => onPressDelete()}
			/>

			{renderWorkoutList()}

		</ScrollView>
	);
};

export default WorkoutList;
