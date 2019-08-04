import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

//	Import components below this
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" titleStyle={styles.sceneTitleText} initial />
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