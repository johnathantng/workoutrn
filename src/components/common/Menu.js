import React from 'react';
import { View, Text, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const Menu = (props) => {
	const { labelButtonOne, labelButtonTwo, onPressButtonOne, OnPressButtonTwo } = props;
	const { cardSectionStyle } = styles;

	return (
		<View>
				<CardSection style={cardSectionStyle}>
					<Button onPress={onPressButtonOne}> {labelButtonOne} </Button>
					<Button onPress={OnPressButtonTwo}> {labelButtonTwo} </Button>
				</CardSection>
		</View>
	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	}
}

export { Menu };