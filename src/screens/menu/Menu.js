import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

import styles from  './style';

export default class Menu extends Component {
    render() {
        return (
            <View>
                {/* <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
                    <Text>}>Fechar</Text>
                </TouchableOpacity> */}

                <View style={styles.menuProfile}>

                </View>
                <DrawerItems {...this.props}></DrawerItems>
                
            </View>
        )
    }
}