import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from './shared/commonStyle';

import Menu from './screens/menu/Menu';
import SearchPlaces from './screens/searchPlaces/SearchPlaces';
import Profile from './screens/profile/Profile';
import About from './screens/about/About';
import AuthenticationOptions from './screens/authenticationOptions/AuthenticationOptions';
import Help from './screens/help/Help';

import PlaceRating from './screens/placeRating/PlaceRating';



const menuNavigator = createDrawerNavigator({
    Home: {
        screen: SearchPlaces,
        navigationOptions: {
            title: 'Início',
            drawerIcon: () => <Icon name="home" size={25} color={commonStyles.colors.primaryFontColor}/>,
            headerStyle: {
                backgroundColor: 'red',
              },
            headerTintColor: 'aqua'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Perfil',
            drawerIcon: () => <Icon name="person" size={25} color={commonStyles.colors.primaryFontColor}/>
        }
    },
    History: {
        screen: Profile,
        navigationOptions: {
            title: 'Histórico',
            drawerIcon: () => <Icon name="history" size={25} color={commonStyles.colors.primaryFontColor}/>
        }
    },
    PlaceRating: { 
        screen: PlaceRating,
        navigationOptions: {
            title: 'Ajuda',
            drawerIcon: () => <Icon name="help" size={25} color={commonStyles.colors.primaryFontColor}/>
        } 
    },
    About: { 
        screen: About,
        navigationOptions: {
            title: 'Sobre',
            drawerIcon: () => <Icon name="info" size={25} color={commonStyles.colors.primaryFontColor}/>
        } 
    },
    Logout: {
        screen: AuthenticationOptions,
        navigationOptions: {
            title: "Sair",
            drawerIcon: () => <Icon name="power-settings-new" size={25} color={commonStyles.colors.primaryFontColor}/>
        }
    }
}, {
    initialRouteName: 'PlaceRating',
    contentComponent: PlaceRating,
    drawerWidth: Dimensions.get('screen').width * 0.85,
    contentOptions: {
        labelStyle: {
            fontWeight: 'normal',
            fontSize: 18
        },
        activeLabelStyles: {
            color: commonStyles.colors.primaryFontColor,
            fontWeight: 'bold'
        }
    }
});

export default createAppContainer(menuNavigator);