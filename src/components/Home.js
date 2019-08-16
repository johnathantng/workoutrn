import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import NavBar from './NavBar';
import { CardSection, Button, ScreenSpinner } from './common';

const Home = (props) => {
	const [userName, setUserName] = useState('');
	const [loading, isLoading] = useState(false);

	useEffect(() => {
		isLoading(true);
		axios.get(`http://10.0.2.2:8685/profile/${props.user}`)
			.then(user => {
				setUserName(user.data.username);
				isLoading(false);
			})
			.catch(err => res.json('something went wrong'))
		axios.get(`http://10.0.2.2:8685/profile/${props.user}/workouts`)
			.then(res => {
				console.log(res.data.length);
				for (i = 0; i < res.data.length; i++) {
					console.log(res.data[i]);
					<Card>
						<Text style={textHeaderStyle}> Name </Text>
						<Text style={textStyle}> {res.data[i].} </Text>
					</Card>
				}
			})
	}, [])

	renderHomeInfo = () => {
		if (loading) {
			return <ScreenSpinner />;
		} else {
			return (
				<ScrollView style={styles.scrollViewStyle}>
					<Text> {props.user} </Text>
				</ScrollView>
			);
		}
	};

	return (
		<View style={styles.containerStyle}>

			{renderHomeInfo()}

			<CardSection>
				<Button onPress={() => Actions.workout({user: props.user, userName: userName})}> Add Workout </Button>
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
