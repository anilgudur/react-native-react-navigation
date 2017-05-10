import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

    Button
} from 'react-native';

export default class NotificationsScreen extends Component {

    static navigationOptions = {
        drawerLabel: 'Notifications',
        // drawerIcon: ({ tintColor }) => (
        // <Image
        //     source={require('./chats-icon.png')}
        //     style={[styles.icon, {tintColor: tintColor}]}
        // />
        // ),
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back"
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