import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class SearchPlaces extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>Abrir Menu</Text>
                </TouchableOpacity>
                <Text>Buscar Locais</Text>
            </View>
        )
    }
}