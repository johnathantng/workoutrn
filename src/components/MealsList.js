import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import { MealsCard, ScreenSpinner, SelectModal } from './common';

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
				setMeals(res.data.reverse());
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
		axios.delete(`http://10.0.2.2:8685/profile/${targetUserId}/meals/${targetMeal}`)
			.then(() => Actions.main({type: 'reset', user: props.user}))
			.catch(err => console.log(err))
	}

	renderMealsList = () => {
		if (loading) {
			return <ScreenSpinner />
		} else {
			return meals.map(data => {
				return <MealsCard 
									key={data.meal_id} 
									mealName={data.meal} 
									mealCalories={data.calories}
									mealCarbs={data.carbs}
									mealProtein={data.protein}
									mealFat={data.fat}
									onPress={() => Actions.editMeal({
										user: props.user,
										meal_id: data.meal_id, 
										mealName: data.meal,
										caloriesValue: data.calories,
										carbsValue: data.carbs,
										proteinValue: data.protein,
										fatValue: data.fat
									})}
									onLongPress={() => {
										showModal(true);
										axios.get(`http://10.0.2.2:8685/profile/${props.user}/meals/${data.meal_id}`)
											.then(res => {
												setTargetUserId(res.data.id);
												setTargetMeal(res.data.meal_id);
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

			{renderMealsList()}

		</ScrollView>
	);
};

export default MealsList;
