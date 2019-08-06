import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const NavBarIcon = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Image 
				style={styles.navIcon}
				source={props.image} 
			/>
		</TouchableOpacity>
	);
};

const styles = {
	navIcon: {
		width: 35,
		height: 35,
		opacity: 0.8
	}
};

export { NavBarIcon };