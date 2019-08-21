import React from 'react';
import { TouchableOpacity, Text, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const SelectModal = ({ visible, onBackgroundPress, onPressEdit, onPressDelete }) => {
	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return (
		<Modal
			visible={visible}
			transparent
			animationType="fade"
			onRequestClose={() => {}}
		>
			<TouchableOpacity style={containerStyle} onPress={onBackgroundPress}>
				<CardSection style={cardSectionStyle}>
					<Button onPress={onPressEdit}> Edit </Button>
					<Button onPress={onPressDelete}> Delete </Button>
				</CardSection>
			</TouchableOpacity>
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
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
}

export { SelectModal };