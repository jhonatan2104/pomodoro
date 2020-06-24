/* eslint-disable no-unused-vars */
import React from 'react';
import { withTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

import Tasks from '~/screens/Tasks';
import Time from '~/screens/Time';
import Graphic from '~/screens/Graphic';
import Home from '~/screens/Home';

const Tab = createBottomTabNavigator();

const Routers = ({ theme }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Ionicons name="ios-home" size={size} color={color} />;
            }
            if (route.name === 'Tasks') {
              return <FontAwesome5 name="tasks" size={size} color={color} />;
            }
            if (route.name === 'Time') {
              return (
                <MaterialCommunityIcons
                  name="timer"
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === 'Graphic') {
              return <AntDesign name="barschart" size={size} color={color} />;
            }
            return null;
          },
        })}
        tabBarOptions={{
          activeTintColor: theme.colors.navigation.active,
          inactiveTintColor: theme.colors.navigation.inactive,
          showLabel: false,
          tabStyle: {
            backgroundColor: theme.colors.navigation.bg,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Time" component={Time} />
        <Tab.Screen name="Graphic" component={Graphic} />
        <Tab.Screen name="Tasks" component={Tasks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(Routers);
