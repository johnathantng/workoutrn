import React from 'react';
import { View, Text, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const SelectModal = ({ visible, onPressEdit, onPressDelete }) => {
	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return (
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Button onPress={onPressEdit}> Edit </Button>
					<Button onPress={onPressDelete}> Delete </Button>
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
}

export { SelectModal };