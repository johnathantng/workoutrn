import React, { useState } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection, Input, Button } from './common';

const LoginForm = () => {
	const [loginUser, setLoginUser] = useState('');

	onUserChange = (text) => {
		setLoginUser(text);
		console.log({loginUser});
	};

	return (
		<View>
			<CardSection>
				<Input
					label="username"
					placeholder="username or email"
					value={loginUser}
					onChangeText={(text) => onUserChange(text)}
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

			<CardSection>
				<Button onPress={() => Actions.register()}> Register </Button>
			</CardSection>
		</View>
	);
};

export default LoginForm;