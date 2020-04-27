import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export default class Menu extends Component {
    render() {
        return (
            <View>
                <Text>Menu</Text>
                <DrawerItems {...this.props}></DrawerItems>
                <TouchableOpacity>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}