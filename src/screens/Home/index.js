import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import PomodoroList from '../PomodoroList';
import CreatePomodoro from '../CreatePomodoro';

const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        animationEnabled: false,
      }}
    >
      <HomeStack.Screen name="Home" component={PomodoroList} />
      <HomeStack.Screen name="CreatePomodoro" component={CreatePomodoro} />
    </HomeStack.Navigator>
  );
};

export default Home;
