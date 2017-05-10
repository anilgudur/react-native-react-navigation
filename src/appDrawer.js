import React, { Component } from 'react';
import {
    Button,
} from 'react-native';
//import { StackNavigator } from 'react-navigation';
//import { TabNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';

import DrawerFirstScreen from './DrawerFirstScreen';
import DrawerSecondScreen from './DrawerSecondScreen';

// Drawer Navigator
const App = DrawerNavigator({
  Home: { screen: DrawerFirstScreen, },
  SecondScreen: { screen: DrawerSecondScreen, },
});

export default App