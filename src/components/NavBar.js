import React from 'react';
import { View } from 'react-native';

import { NavBarIcon } from './common';

const NavBar = (props) => {
	return (
		<View style={styles.navBar}>
			<NavBarIcon image={require('../assets/icons/home.png')} />
			<NavBarIcon image={require('../assets/icons/event.png')} />
			<NavBarIcon image={require('../assets/icons/account.png')} />
		</View>
	);
};

const styles = {
	navBar: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		padding: 5,
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		paddingRight: 40,
		paddingLeft: 40
	}
}

export default NavBar;
