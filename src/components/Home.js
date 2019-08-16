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
	}, [])

	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> {props.user} </Text>
			</ScrollView>
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
	}
}

export default Home;
