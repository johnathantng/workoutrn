import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';

const Home = (props) => {
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> {props.user} </Text>
			</ScrollView>
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
