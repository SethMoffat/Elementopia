import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';
import Levels from './components/Levels';
import Sandbox from './components/Sandbox';
import Encyclopedia from './components/Encyclopedia';
import Achievements from './components/Achievements';

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
