import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection, Input, Button } from './common';

const RegisterForm = () => {
	return (
		<View>
			<CardSection>
				<Input
					label="username"
					placeholder="username"
				/>
			</CardSection>

			<CardSection>
				<Input
					label="email"
					placeholder="email"
				/>
			</CardSection>

			<CardSection>
				<Input
					label="password"
					placeholder="password"
					secureTextEntry
				/>
			</CardSection>

			<CardSection>
				<Input
					label="repeat password"
					placeholder="confirm password"
				/>
			</CardSection>

			<CardSection>
				<Button> Register </Button>
			</CardSection>

			<CardSection>
				<Button onPress={() => Actions.pop()}> Already a user? </Button>
			</CardSection>
		</View>
	);
};

export default RegisterForm;