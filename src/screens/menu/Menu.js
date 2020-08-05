import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItems } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import styles from './style';

class Menu extends Component {
  getLoggedUser = () => {
    if (!this.props.loggedUser) {
      return {
        name: 'Anônimo',
        email: '',
        photo: '',
      };
    }
    return this.props.loggedUser;
  };

  render() {
    return (
      <View>
        <View style={styles.menuProfile}>
          <Image
            style={styles.photoUser}
            source={
              this.getLoggedUser().photo
                ? { uri: this.getLoggedUser().photo }
                : require('../../../assets/imgs/person.png')
            }
          />

          <View style={styles.userData}>
            <Text style={styles.userName}>{this.getLoggedUser().name}</Text>
            <Text style={styles.userEmail}>{this.getLoggedUser().email}</Text>
          </View>
          <TouchableOpacity
            style={styles.closeMenu}
            onPress={() => this.props.navigation.closeDrawer()}
          >
            <Icon name="arrow-back" size={27} color="#FFF" />
          </TouchableOpacity>
        </View>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    loggedUser: users.loggedUser,
  };
};

export default connect(mapStateToProps)(Menu);
