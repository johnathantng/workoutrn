import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';
import UserContext from './LoginForm';

const Event = (props) => {
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> Event </Text>
				{/* Create a list of weekdays in order to note your progress */}
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
