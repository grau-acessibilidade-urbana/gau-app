import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

import styles from  './style';

export default class Menu extends Component {
    render() {
        return (
            <View>


                <View style={styles.menuProfile}>
                    <View style={styles.photoUser}></View>

                    <View style={styles.userData}>
                        <Text style={styles.textUserData}>Maria Joaquina</Text>
                        <Text style={styles.textUserData}>mariajoaquina@hotmail.com</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
                        <Text>x</Text>
                    </TouchableOpacity>
                </View>



                <DrawerItems {...this.props}></DrawerItems>
                
            </View>
        )
    }
}