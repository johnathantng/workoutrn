import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';

const Home = (props) => {
	console.log(props.user);
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> Hello World! </Text>
			</ScrollView>
			<NavBar homeOpacity={0.7} />
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
