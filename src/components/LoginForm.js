import React from 'react';
import { View } from 'react-native';

import { Input } from './common';

const LoginForm = () => {
	return (
		<Input
			label="username"
			placeholder="username or email"
		/>
	);
};

export default LoginForm;