import React from 'react';
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

	setRegEmail = (text) => {
		setRegEmail(text);
	};

	setRegPass = (text) => {
		setRegPass(text);
	}

	setRegPass = (text) => {
		setRegRepPass(text);
	}

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
					secureTextEntry
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