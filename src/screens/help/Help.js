import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import styles from './style';
import commonStyles from '../../shared/commonStyle';

export default class Help extends Component {
  state = {
    date: [
      {
        title: 'Um titulo aqui',
        subtitle: 'um subtitulo aqui',
        id: '1',
      },
      {
        title: 'Um titulo aqui',
        subtitle: 'um subtitulo aqui',
        id: '2',
      },
      {
        title: 'Um titulo aqui',
        subtitle: 'um subtitulo aqui',
        id: '3',
      },
      {
        title: 'Um titulo aqui',
        subtitle: 'um subtitulo aqui',
        id: '4',
      },
      {
        title: 'Um titulo aqui',
        subtitle: 'um subtitulo aqui',
        id: '5',
      },
      {
        title: 'Um titulo aqui',
        subtitle: 'um subtitulo aqui',
        id: '6',
      },
      {
        title: 'Um titulo aqui',
        subtitle: 'um subtitulo aqui',
        id: '7',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header goBack={() => this.props.navigation.navigate('SearchPlaces')} />
        <Text style={styles.title}>Ajuda</Text>

        <FlatList
          style={styles.list}
          data={this.state.date}
          keyExtractor={(item) => item.id}
          renderItem={({ item, i }) => (
            <TouchableOpacity
              key={i}
              style={styles.box}
              activeOpacity={0.7}
              onPress={() => this.props.navigation.navigate('HelpDetails')}
            >
              <View>
                <Text style={styles.item}>{item.title}</Text>
                <Text style={styles.subitem}>{item.subtitle} </Text>
              </View>
              <Icon
                name="chevron-right"
                size={40}
                color={commonStyles.colors.secondFontColor}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
