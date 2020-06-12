import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header';
import styles from './style';

export default class About extends Component {
    render() {
        return (
            <View>
                <Header goBack={() => this.props.navigation.navigate('SearchPlaces')}/>
                <Text style={styles.title}>Sobre o aplicativo</Text>

               

            </View>
        )
    }
}