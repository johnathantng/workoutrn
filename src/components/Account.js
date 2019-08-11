import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Card, CardSection, Spinner } from './common';
import NavBar from './NavBar';

const Account = (props) => {
	useEffect(() => {
		
	})
	console.log(props.user)
	return (
		<View style={styles.containerStyle}>
			<ScrollView style={styles.scrollViewStyle}>
				<Card>
					<Text style={styles.textStyle}> {props.user} </Text>
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
	textStyle: {
		textAlign: 'center'
	}
}

export default Account;
