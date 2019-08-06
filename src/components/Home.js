import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';

const Home = () => {
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> Hello World! </Text>
			</ScrollView>
			<NavBar />
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
