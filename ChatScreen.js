import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

    Button
} from 'react-native';

export default class ChatScreen extends Component {

    // static navigationOptions = {
    //     title: 'Welcome',
    // };

    // Nav options can be defined as a function of the screen's props:
    // static navigationOptions = ({ navigation }) => ({
    //     title: `Chat with ${navigation.state.params.user}`,
    //     headerRight: <Button title="Info" />,
    // });

    static navigationOptions = ({ navigation }) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const { user } = state.params;
        return {
            title: isInfo ? `${user}s Contact Info` : `Chat with ${user}`,
            headerRight: (
                <Button 
                    title={isInfo ? "Done" : `${user}s info`} 
                    onPress={() => setParams({mode: isInfo ? 'none': 'info'})}
                />
            )
        };
    };
    render() {
        // const { navigate } = this.props.navigation;
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}