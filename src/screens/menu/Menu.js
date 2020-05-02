import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from  './style';

export default class Menu extends Component {
    render() {
        return (
            <View>
                <View style={styles.menuProfile}>
                    <Image style={styles.photoUser}  source={{uri:'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} />

                    <View style={styles.userData}>
                        <Text style={styles.userName}>Maria Joaquina</Text>
                        <Text style={styles.userEmail}>mariajoaquina@hotmail.com</Text>
                    </View>
                    <TouchableOpacity style={styles.closeMenu} onPress={() => this.props.navigation.closeDrawer()}>
                        <Icon name='arrow-back' size={27} color='#FFF'></Icon>
                    </TouchableOpacity>
                </View>

                <DrawerItems {...this.props}></DrawerItems>
            </View>
        )
    }
}