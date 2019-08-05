import React, { useState } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection, Input, Button } from './common';

const RegisterForm = () => {
	const [regUser, setRegUser] = useState('');
	const [regEmail, setRegEmail] = useState('');
	const [regPass, setRegPass] = useState('');
	const [regRepPass, setRegRepPass] = useState('');

	onRegUserChange = (text) => {
		setRegUser(text);
	};

	onRegEmailChange = (text) => {
		setRegEmail(text);
	};

	onRegPassChange = (text) => {
		setRegPass(text);
	};

	onRegRepPassChange = (text) => {
		setRegRepPass(text);
	};

	onRegisterPress = () => {
		console.log(regUser);
		console.log(regEmail);
		console.log(regPass);
		console.log(regRepPass);
	};

	return (
		<View>
			<CardSection>
				<Input
					label="username"
					placeholder="username"
					value={regUser}
					onChangeText={(text) => onRegUserChange(text)}
				/>
			</CardSection>

			<CardSection>
				<Input
					label="email"
					placeholder="email"
					value={regEmail}
					onChangeText={(text) => onRegEmailChange(text)}
				/>
			</CardSection>

			<CardSection>
				<Input
					label="password"
					placeholder="password"
					value={regPass}
					onChangeText={(text) => onRegPassChange(text)}
					secureTextEntry
				/>
			</CardSection>

			<CardSection>
				<Input
					label="repeat password"
					placeholder="confirm password"
					value={regRepPass}
					onChangeText={(text) => onRegRepPassChange(text)}
					secureTextEntry
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => onRegisterPress()}> Register </Button>
			</CardSection>

			<CardSection>
				<Button onPress={() => Actions.pop()}> Already a user? </Button>
			</CardSection>
		</View>
	);
};

export default RegisterForm;