import React from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import About from './screens/about/About';
import Help from './screens/help/Help';
import Menu from './screens/menu/Menu';
import Profile from './screens/profile/Profile';
import SearchPlaces from './screens/searchPlaces/SearchPlaces';
import commonStyles from './shared/commonStyle';
import PlaceView from './screens/placeView/placeView';
import AuthenticationOptions from './screens/authenticationOptions/AuthenticationOptions';
import Login from './screens/login/Login';
import SignUp from './screens/signup/SignUp';

const loginNavigator = createStackNavigator({
    AuthOptions: {
        screen: AuthenticationOptions
    },
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    }
}, {
    headerMode: 'none',
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
    }
});

const stackNavigator = createStackNavigator({
    SearchPlaces: {
        screen: SearchPlaces
    },
    PlaceView: {
        screen: PlaceView
    }
}, {
    headerMode: 'none',
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
    }
});

const menuNavigator = createDrawerNavigator({
    Home: {
        screen: SignUp,
        navigationOptions: {
            title: 'Início',
            drawerIcon: () => <Icon name="home" size={25} color={commonStyles.colors.primaryFontColor} />,
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
            drawerIcon: () => <Icon name="person" size={25} color={commonStyles.colors.primaryFontColor} />
        }
    },
    History: {
        screen: Profile,
        navigationOptions: {
            title: 'Histórico',
            drawerIcon: () => <Icon name="history" size={25} color={commonStyles.colors.primaryFontColor} />
        }
    },
    Help: {
        screen: Help,
        navigationOptions: {
            title: 'Ajuda',
            drawerIcon: () => <Icon name="help" size={25} color={commonStyles.colors.primaryFontColor} />
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'Sobre',
            drawerIcon: () => <Icon name="info" size={25} color={commonStyles.colors.primaryFontColor} />
        }
    },
    Logout: {
        screen: AuthenticationOptions,
        navigationOptions: {
            title: "Sair",
            drawerIcon: () => <Icon name="power-settings-new" size={25} color={commonStyles.colors.primaryFontColor} />
        }
    }
}, {
    initialRouteName: 'Home',
    contentComponent: Menu,
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