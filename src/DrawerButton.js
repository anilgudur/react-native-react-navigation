import React from 'react';
import {
    StyleSheet,
    Text,
    View,

    TouchableOpacity,
    Button
} from 'react-native';

const DrawerButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('DrawerOpen')}
    style={styles.buttonStyle}
  >
    <Icon
      name="menu"
      style={styles.iconStyle}
    />
  </TouchableOpacity>
);

DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default DrawerButton;