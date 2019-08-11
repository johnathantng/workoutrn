import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

import { Card, CardSection, Spinner } from './common';
import NavBar from './NavBar';

const Account = (props) => {
	const { 
		containerStyle, 
		scrollViewStyle, 
		textHeaderStyle, 
		textStyle } = styles;

	useEffect(() => {
		axios.get(`http://10.0.2.2:8685/profile/${props.user}`)
			.then(res => console.log(res))
	})

	console.log(props.user)

	return (
		<View style={containerStyle}>
			<ScrollView style={scrollViewStyle}>
				<Card>
					<Text style={textHeaderStyle}> Name </Text>
					<Text style={textStyle}> {props.user} </Text>
				</Card>
				<Card>
					<Text style={textHeaderStyle}> Age </Text>
					<Text style={textStyle}> {props.user} </Text>
				</Card>
				<Card>
					<Text style={textHeaderStyle}> Height </Text>
					<Text style={textStyle}> {props.user} </Text>
				</Card>
				<Card>
					<Text style={textHeaderStyle}> Weight </Text>
					<Text style={textStyle}> {props.user} </Text>
				</Card>
				<Card>
					<Text style={textHeaderStyle}> Lifestyle </Text>
					<Text style={textStyle}> {props.user} </Text>
				</Card>
			</ScrollView>
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
