import React, { useState, useContext } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

//	Import components below this
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreationForm from './components/CreationForm';
import Home from './components/Home';
import Event from './components/Event';
import Account from './components/Account';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" titleStyle={styles.sceneTitleText} />
					<Scene key="register" component={RegisterForm} title="Register a User" titleStyle={styles.sceneTitleText} />
					<Scene key="creation" component={CreationForm} title="Account Creation" titleStyle={styles.sceneTitleText} initial />
				</Scene>
				<Scene key="main">
					<Scene key="home" component={Home} title="Workout" titleStyle={styles.sceneTitleText} initial />
				</Scene>
				<Scene key="second">
					<Scene key="event" component={Event} title="Calendar" titleStyle={styles.sceneTitleText} initial />
				</Scene>
				<Scene key="third">
					<Scene key="account" component={Account} title="Account" titleStyle={styles.sceneTitleText} initial />
				</Scene>
			</Scene>
		</Router>
	);
};

const styles = {
	sceneTitleText: {
		flex: 1,
		textAlign: 'center',
		color: '#352e30'
	}
};

export default RouterComponent;