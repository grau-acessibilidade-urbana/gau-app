import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from '../../TabNavigator';
import commonStyles from '../../shared/commonStyle';
import Header from '../../components/Header';
import styles from './style';

export default class Profile extends Component {

    state ={
        name: 'Maria Joaquina',
        email: 'mariajoaquina@hotmail.com',
        photoUser: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        rating: 28,
    }

    onNavigate = (route) => {
        this.props.navigation.navigate(route);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header goBack={this.props.navigation.goBack}/>
                <View style={styles.contantUser}>
                    <View style={styles.photoContainer}>
                        <Image style={styles.photoUser} source={{uri: this.state.photoUser}}/>
                        <TouchableOpacity style={styles.edit} activeOpacity={0.7}>
                            <Icon name="create" size={20} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{this.state.name}</Text>
                    <Text style={styles.email}>{this.state.email}</Text>

                    <View style={styles.rating}>
                        <Icon name="place" size={20} color={commonStyles.colors.primaryColor}/>
                        <Text style={styles.textRating}>{this.state.rating}</Text>
                    </View>
                </View>

                <TabNavigator data='teste'/>

            </View>
        )
    }
}