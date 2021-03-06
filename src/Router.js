import React, { useState, useContext } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

//	Import components below this
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreationForm from './components/CreationForm';
import Home from './components/Home';
import AddMeal from './components/AddMeal';
import EditMeal from './components/EditMeal';
import AddWorkout from './components/AddWorkout';
import EditWorkout from './components/EditWorkout';
import DayPage from './components/DayPage';
import Event from './components/Event';
import Account from './components/Account';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" titleStyle={styles.sceneTitleText} initial />
					<Scene key="register" component={RegisterForm} title="Register a User" titleStyle={styles.sceneTitleText} />
				</Scene>
				<Scene key="creation">
					<Scene key="info" component={CreationForm} title="Account Creation" titleStyle={styles.sceneTitleText} />
				</Scene>
				<Scene key="main">
					<Scene key="home" component={Home} title="Workout" titleStyle={styles.sceneTitleText} initial />
					<Scene key="addMeal" component={AddMeal} title="Add a Meal" titleStyle={styles.sceneTitleText} />
					<Scene key="editMeal" component={EditMeal} title="Edit a Meal" titleStyle={styles.sceneTitleText} />
					<Scene key="addWorkout" component={AddWorkout} title="Add a Workout" titleStyle={styles.sceneTitleText} />
					<Scene key="editWorkout" component={EditWorkout} title="Edit Workout" titleStyle={styles.sceneTitleText} />
				</Scene>
				<Scene key="second">
					<Scene key="event" component={Event} title="Calendar" titleStyle={styles.sceneTitleText} initial />
					<Scene key="track" component={DayPage} title="Track" titleStyle={styles.sceneTitleText} />
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