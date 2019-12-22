import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';
import DaysList from './DaysList';
import { CardSection, Alert, Hint } from './common';

const Event = (props) => {

	useEffect(() => {
		// render hint in here
	}, [])

	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<CardSection>
					<Text style={styles.textStyle}> Track This Week's Progress </Text>
				</CardSection>
				<DaysList />
			</ScrollView>
			<NavBar eventOpacity={0.7} user={props.user}/>
		</View>
	);
};

const styles = {
	containerStyle: {
		flex: 1
	},
	textStyle: {
		textAlign: 'center',
		fontSize: 20,
		color: '#352e30'
	},
	scrollViewStyle: {
		flex: 1
	}
}

export default Event;
