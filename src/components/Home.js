import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import NavBar from './NavBar';
import { CardSection, Button } from './common';

const Home = (props) => {
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> {props.user} </Text>
			</ScrollView>
			<CardSection>
				<Button onPress={() => Actions.workout({user: props.user})}> Add Workout </Button>
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
