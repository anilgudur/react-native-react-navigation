import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

    Button,
    Image
} from 'react-native';

export default class RecentChatsScreen extends Component {

    static navigationOptions = {
        tabBarLabel: 'Recent',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/home.png')}
                style={[styles.icon, {tintColor: 'black'}]}
            />
        ),
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>List of recent chats</Text>
                <Button
                    onPress={() => navigate('Chat', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});