import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

//	Import components below this
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" titleStyle={styles.sceneTitleText} initial />
					<Scene key="register" component={RegisterForm} title="Register a User" titleStyle={styles.sceneTitleText} />
				</Scene>
				<Scene key="main">
					<Scene key="home" component={Home} title="Workout" titleStyle={styles.sceneTitleText} initial />
				</Scene>
			</Scene>
		</Router>
	);
};

const styles = {
	sceneTitleText: {
		flex: 1,
		textAlign: 'center'
	}
};

export default RouterComponent;