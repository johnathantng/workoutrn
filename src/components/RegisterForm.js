import React, { useState } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

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
		if (regPass == regRepPass) {
			axios.post('http://10.0.2.2:8685/register', {
				username: regUser,
				email: regEmail,
				password: regPass
			})
			.catch(err => console.log('failed to register!'))
		}
	};

	/*
		onSubmitSignIn = () => {
			fetch('http://localhost:3001/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password,
					name: this.state.name
				})
			})
				.then(response => response.json())
				.then(user => {
					if (user.id){
						this.props.loadUser(user);
						this.props.onRouteChange('home');
					} else {
						alert ('not recognized');
					}
			})
		}
	*/

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