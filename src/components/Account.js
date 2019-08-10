import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import NavBar from './NavBar';

const Account = (props) => {
	console.log(props.user)
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Text> Account </Text>
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
	}
}

export default Account;
