import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';

const NavBarIcon = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Image 
				style={styles.navIcon, { opacity: props.opacityLevel || 0.3 }}
				source={props.image} 
			/>
		</TouchableOpacity>
	);
};

const styles = {
	navIcon: {
		width: 35,
		height: 35
	}
};

export { NavBarIcon };