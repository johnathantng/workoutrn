import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, Input, Button, Spinner } from './common';

const RegisterForm = () => {
	const [regUser, setRegUser] = useState('');
	const [regEmail, setRegEmail] = useState('');
	const [regPass, setRegPass] = useState('');
	const [regRepPass, setRegRepPass] = useState('');
	const [error, setError] = useState(false);
	const [loading, isLoading] = useState(false);

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
		isLoading(true);
		if (regPass == regRepPass) {
			axios.post('http://10.0.2.2:8685/register', {
				username: regUser,
				email: regEmail,
				password: regPass
			})
			.then(res => {
				isLoading(false);
				Actions.pop();
			})
			.catch(err => {
				setError(true);
				isLoading(false);
			})
		}
	};

	renderRegisterButton = () => {
		if (loading) {
			return (
				<CardSection>
					<Spinner />
				</CardSection>
			);
		} else {
			return (
				<CardSection>
					<Button onPress={() => onRegisterPress()}> Register </Button>
				</CardSection>
			);
		}
	};

	hasError = () => {
		if (error) {
				return (
				<CardSection style={styles.errorContainer}>
					<Text style={styles.errorText}> Invalid Form Submission </Text>
				</CardSection>
			);
		}
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

			{renderRegisterButton()}

			<CardSection>
				<Button onPress={() => Actions.pop()}> Already a user? </Button>
			</CardSection>

			{hasError()}

		</View>
	);
};

const styles = {
	errorContainer: {
		justifyContent: 'center'
	},
	errorText: {
		color: 'red'
	}
}

export default RegisterForm;