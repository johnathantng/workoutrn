import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

import { Card, CardSection, ScreenSpinner, Spinner } from './common';
import NavBar from './NavBar';

const Account = (props) => {
	const { 
		containerStyle, 
		scrollViewStyle, 
		textHeaderStyle, 
		textStyle } = styles;

	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [userHeight, setUserHeight] = useState('');
	const [userWeight, setUserWeight] = useState('');
	const [loading, isLoading] = useState(false);

	useEffect(() => {
		isLoading(true);
		axios.get(`http://10.0.2.2:8685/profile/${props.user}`)
			.then(user => {
				setUserName(user.data.username);
				setUserAge(user.data.age);
				setUserHeight(user.data.height + " cm");
				setUserWeight(user.data.weight + " kg");
				isLoading(false);
			})
	}, [])

	renderAccountInfo = () => {
		if (loading) {
			return <ScreenSpinner />
		} else {
			return (
				<ScrollView style={scrollViewStyle}>
					<Card>
						<Text style={textHeaderStyle}> Name </Text>
						<Text style={textStyle}> {userName} </Text>
					</Card>
					<Card>
						<Text style={textHeaderStyle}> Age </Text>
						<Text style={textStyle}> {userAge} </Text>
					</Card>
					<Card>
						<Text style={textHeaderStyle}> Height </Text>
						<Text style={textStyle}> {userHeight} </Text>
					</Card>
					<Card>
						<Text style={textHeaderStyle}> Weight </Text>
						<Text style={textStyle}> {userWeight} </Text>
					</Card>
				</ScrollView>
			);
		}
	};

	return (
		<View style={containerStyle}>

			{renderAccountInfo()}

			<NavBar accountOpacity={0.7} user={props.user}/>
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

export default Account;
