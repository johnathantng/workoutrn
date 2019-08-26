import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import { WorkoutCard, ScreenSpinner, SelectModal } from './common';

const MealsList = (props) => {
	const [meals, setMeals] = useState([]);
	const [targetUserId, setTargetUserId] = useState('');
	const [targetMeal, setTargetMeal] = useState('');
	const [loading, isLoading] = useState(false);
	const [modal, showModal] = useState(false);

	useEffect(() => {
		isLoading(true);
		axios.get(`http://10.0.2.2:8685/profile/${props.user}/meals`)
			.then(res => {
				setWorkouts(res.data.reverse());
				isLoading(false);
			})
			.catch(err => isLoading(false));
	}, [])

	onPressEdit = () => {
		showModal(false);
		axios.get(`http://10.0.2.2:8685/profile/${targetUserId}/meals/${targetMeal}`)
			.then(res => Actions.editMeal({
				user: props.user,
				meal_id: res.data.meal_id,
				mealName: res.data.meal,
				caloriesValue: res.data.calories,
				carbsValue: res.data.carbs,
				proteinValue: res.data.protein,
				fatValue: res.data.fat,
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
				return <MealsCard 
									key={data.meal_id} 
									mealName={data.meal_name} 
									mealCalories={data.calories}
									mealCarbs={data.carbs}
									mealProtein={data.protein}
									mealFat={data.fat}
									onPress={() => Actions.edit({
										user: props.user,
										workout_id: data.workout_id, 
										workoutName: data.workout,
										workoutType: data.type,
										currentReps: data.current_reps,
										currentSets: data.current_sets,
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

export default MealsList;
