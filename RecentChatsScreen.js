import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

    Button
} from 'react-native';

export default class RecentChatsScreen extends Component {
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