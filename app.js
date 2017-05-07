import React, { Component } from 'react';
import {
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import RecentChatsScreen from './RecentChatsScreen';
import AllContactsScreen from './AllContactsScreen';
import NotificationsScreen from './NotificationsScreen';

// Main Screen Navigator
const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
}, {
  tabBarOptions: {
    activeTintColor: '#ffff00',
  },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

// Drawer Navigator
const DrawerApp = DrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
  NotificationsScreen: {
    screen: NotificationsScreen,
  },
});

const App = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: { screen: ChatScreen },
    //Notifications: { screen: DrawerApp },
});

export default App