import React from 'react';
import { View } from 'react-native';

import { CardSection, Input, Button } from './common';

const LoginForm = () => {
	return (
		<View>
			<CardSection>
				<Input
					label="username"
					placeholder="username or email"
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
				<Button> Sign In </Button>
			</CardSection>
		</View>
	);
};

export default LoginForm;