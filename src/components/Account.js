import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';

const Account = () => {
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> Account </Text>
			</ScrollView>
			<NavBar accountOpacity={0.7} />
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

export default Account;
