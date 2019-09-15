import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';
import DaysList from './DaysList';
import { CardSection } from './common';

const Event = (props) => {
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<CardSection>
					<Text> Track This Week's Progress </Text>
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
	scrollViewStyle: {
		flex: 1
	}
}

export default Event;
