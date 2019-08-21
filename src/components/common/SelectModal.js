import React from 'react';
import { View, Text, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const SelectModal = ({ visible, onPressEdit, onPressDelete }) => {
	return (
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View>
				<CardSection>
					<Button onPress={onPressEdit}> Edit </Button>
					<Button onPress={onPressDelete}> Delete </Button>
				</CardSection>
			</View>
		</Modal>
	);
};

export { SelectModal };