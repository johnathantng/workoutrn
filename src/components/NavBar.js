import React from 'react';
import { View } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import { NavBarIcon } from './common';

const NavBar = (props) => {
	return (
		<View style={styles.navBar}>
			<NavBarIcon 
				onPress={() => Actions.main({type: 'reset', user: props.user})}
				image={require('../assets/icons/home.png')}
				opacityLevel={props.homeOpacity}
			/>
			<NavBarIcon
				onPress={() => Actions.second({user: props.user})}
				image={require('../assets/icons/event.png')}
				opacityLevel={props.eventOpacity}
			/>
			<NavBarIcon
				onPress={() => Actions.third({user: props.user})}
				image={require('../assets/icons/account.png')}
				opacityLevel={props.accountOpacity}
			/>
		</View>
	);
};

const styles = {
	navBar: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		padding: 10,
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderColor: '#ddd',
		shadowColor: '#352e30',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		paddingRight: 40,
		paddingLeft: 40
	}
}

export default NavBar;
