import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import Home from './Home';
import Levels from './Levels';
import Sandbox from './Sandbox';
import Encyclopedia from './Encyclopedia';
import Achievements from './Achiements';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Levels: {
      screen: Levels,
    },
    Sandbox: {
      screen: Sandbox,
    },
    Encyclopedia: {
      screen: Encyclopedia,
    },
    Achievements: {
      screen: Achievements,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <>
      <AppContainer />
      <StatusBar style="auto" />
    </>
  );
}