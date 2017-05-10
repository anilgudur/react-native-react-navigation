import React, { Component } from 'react';
import {
    Button,

    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import {
    StackNavigator, 
    TabNavigator, 
    DrawerNavigator
} from 'react-navigation';
import styles from '../styles/styles';

//import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import RecentChatsScreen from './RecentChatsScreen';
import AllContactsScreen from './AllContactsScreen';
//import NotificationsScreen from './NotificationsScreen';
import DrawerFirstScreen from './DrawerFirstScreen';
import DrawerSecondScreen from './DrawerSecondScreen';
import DrawerButton from './DrawerButton';

// Tab Navigator
const AppTab = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
}, {
  tabBarOptions: {
    activeTintColor: '#ffff00',
    showIcon: true,
    // labelStyle: {
    //     fontSize: 16,
    //     flexDirection:'row'
    // },
  },
});
/*AppTab.navigationOptions = {
    header: navigation => ({
      title: 'My Chats',
      left: <DrawerButton navigation={navigation} />,
    }),
  // title: 'My Chats',
  // headerLeft: <DrawerButton navigation={navigation} />,
  //   // headerLeft: navigation => (
  //   //         <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')} underlayColor="transparent">
  //   //             <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Burger</Text>
  //   //         </TouchableHighlight>
  //   // ),
  // headerStyle: {
  //     justifyContent: "center"
  // }
};*/
AppTab.navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    //const { user } = state.params;
    return {
        title: 'My Chats',
        headerLeft: (
            <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')} underlayColor="transparent">
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Burger</Text>
            </TouchableHighlight>
            // <Button 
            //     title={isInfo ? "Done" : `${user}s info`} 
            //     onPress={() => setParams({mode: isInfo ? 'none': 'info'})}
            // />
        ),
        headerStyle: {
            justifyContent: "center"
        }
    };
};

// Stack Navigator
const AppStack = StackNavigator({
    Home: { screen: AppTab },
    Chat: { screen: ChatScreen },
    //Notifications: { screen: DrawerApp },
});
AppStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home.png')}
        style={[styles.tabIcon, {tintColor: 'black'}]}
      />
    ),
}

// Drawer Navigator
const App = DrawerNavigator({
  Home: { screen: AppStack, },
  SecondScreen: { screen: DrawerSecondScreen, },
});
// <App
//     screenProps={
//         //navigation
//         /* this prop will get passed to the screen components and nav options as props.screenProps */
//     }
// />

export default App