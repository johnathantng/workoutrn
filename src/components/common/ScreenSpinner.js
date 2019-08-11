import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

const ScreenSpinner = ({ size }) => {
	return (
		<ScrollView style={styles.viewStyle}>
			<ActivityIndicator style={styles.spinnerStyle} size={size || 'large'} />
		</ScrollView>
	);
};

const styles = { 
	viewStyle: {
		flex: 1,
	},
	spinnerStyle: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { ScreenSpinner };
