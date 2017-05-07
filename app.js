import React, { Component } from 'react';
import {
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});

export default App