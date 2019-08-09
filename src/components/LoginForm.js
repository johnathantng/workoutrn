import React, { useState } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, Input, Button } from './common';

const LoginForm = () => {
	const [loginUser, setLoginUser] = useState('');
	const [loginPass, setLoginPass] = useState('');

	onLoginUserChange = (text) => {
		setLoginUser(text);
	};

	onLoginPassChange = (text) => {
		setLoginPass(text);
	};

	onLoginPress = () => {
		axios.post('http://10.0.2.2:8685/login', {
			username: loginUser,
			password: loginPass
		})
		.then(user => {
			if (user.data.user_id) {
				Actions.main({type: 'reset'});
			}
		})
		.catch(err => console.log('failed to login'))
	};

	return (
		<View>
			<CardSection>
				<Input
					label="username"
					placeholder="username or email"
					value={loginUser}
					onChangeText={(text) => onLoginUserChange(text)}
				/>
			</CardSection>

			<CardSection>
				<Input
					label="password"
					placeholder="password"
					value={loginPass}
					onChangeText={(text) => onLoginPassChange(text)}
					secureTextEntry
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => onLoginPress()}> Sign In </Button>
			</CardSection>

			<CardSection>
				<Button onPress={() => Actions.register()}> Register </Button>
			</CardSection>
		</View>
	);
};

export default LoginForm;