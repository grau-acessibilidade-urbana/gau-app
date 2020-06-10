import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../../components/Header';
import styles from './style';

export default class Help extends Component {

    state = [
        {
            title: 'Um titulo aqui',
            subtitle: 'um subtitulo aqui'
        },
        {
            title: 'Um titulo aqui',
            subtitle: 'um subtitulo aqui'
        },
        {
            title: 'Um titulo aqui',
            subtitle: 'um subtitulo aqui'
        },
        {
            title: 'Um titulo aqui',
            subtitle: 'um subtitulo aqui'
        },
        {
            title: 'Um titulo aqui',
            subtitle: 'um subtitulo aqui'
        },
        {
            title: 'Um titulo aqui',
            subtitle: 'um subtitulo aqui'
        },
        {
            title: 'Um titulo aqui',
            subtitle: 'um subtitulo aqui'
        }
    ]

    render() {
        return (
            <View>
                <Header goBack={this.props.navigation.goBack}/>
                <Text style={styles.title}>Ajuda</Text>

                <FlatList style={styles.list}
                data={this.state.history}
                keyExtractor={item => item.place}
                renderItem={({ item, i }) =>
                    <View key={i}>

                    </View>

                }
                />
            </View>
        )
    }
}