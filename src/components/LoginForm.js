import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import { CardSection, Input, Button, Spinner } from './common';

const LoginForm = () => {
	const [loginUser, setLoginUser] = useState('');
	const [loginPass, setLoginPass] = useState('');
	const [error, setError] = useState(false);
	const [loading, isLoading] = useState(false);

	onLoginUserChange = (text) => {
		setLoginUser(text);
	};

	onLoginPassChange = (text) => {
		setLoginPass(text);
	};

	onLoginPress = () => {
		isLoading(true);
		axios.post('http://10.0.2.2:8685/login', {
			username: loginUser,
			hash: loginPass
		})
		.then(user => {
			if (user.data.age == null) {
				isLoading(false);
				Actions.creation({type: 'reset', user: user.data.id});
			} else {
				isLoading(false);
				Actions.main({type: 'reset', user: user.data.id});
			}
		})
		.catch(err => {
			setError(true);
			isLoading(false);
		})
	};

	renderLoginButton = () => {
		if (loading) {
			return (
				<CardSection>
					<Spinner />
				</CardSection>
			);
		} else {
			return (
				<CardSection>
					<Button onPress={() => onLoginPress()}> Sign In </Button>
				</CardSection>
			);
		}
	};

	hasError = () => {
		if (error) {
				return (
				<CardSection style={styles.errorContainer}>
					<Text style={styles.errorText}> Wrong User Credentials </Text>
				</CardSection>
			);
		}
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

			{renderLoginButton()}

			<CardSection>
				<Button onPress={() => {
						setError(false);
						Actions.register();
					}
				}> 
					Register 
				</Button>
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

export default LoginForm;