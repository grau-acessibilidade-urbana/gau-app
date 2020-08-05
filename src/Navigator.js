import React from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';
import About from './screens/about/About';
import AuthenticationOptions from './screens/authenticationOptions/AuthenticationOptions';
import Help from './screens/help/Help';
import HelpDetails from './screens/helpDetails/HelpDetails';
import History from './screens/history/History';
import Login from './screens/login/Login';
import Logout from './screens/Logout';
import Menu from './screens/menu/Menu';
import PlaceHistory from './screens/placeHistory/PlaceHistory';
import PlaceView from './screens/placeView/PlaceView';
import Profile from './screens/profile/Profile';
import SearchPlaces from './screens/searchPlaces/SearchPlaces';
import SignUp from './screens/signup/SignUp';
import commonStyles from './shared/commonStyle';
import PlaceRating from './screens/placeRating/PlaceRating';

const loginNavigator = createStackNavigator(
  {
    AuthOptions: {
      screen: AuthenticationOptions,
    },
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: 'AuthOptions',
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const homeStackNavigator = createStackNavigator(
  {
    SearchPlaces: {
      screen: SearchPlaces,
    },
    PlaceView: {
      screen: PlaceView,
    },
    PlaceRating: {
      screen: PlaceRating,
    },
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const stackHistory = createStackNavigator(
  {
    History: {
      screen: History,
    },
    PlaceHistory: {
      screen: PlaceHistory,
    },
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const stackHelp = createStackNavigator(
  {
    Help: {
      screen: Help,
    },
    HelpDetails: {
      screen: HelpDetails,
    },
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  }
);

const menuNavigatorLoggedUser = createDrawerNavigator(
  {
    Home: {
      screen: homeStackNavigator,
      navigationOptions: {
        title: 'Início',
        drawerIcon: () => (
          <Icon
            name="home"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'aqua',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil',
        drawerIcon: () => (
          <Icon
            name="user-alt"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
    History: {
      screen: stackHistory,
      navigationOptions: {
        title: 'Histórico',
        drawerIcon: () => (
          <Icon
            name="history"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
    Help: {
      screen: stackHelp,
      navigationOptions: {
        title: 'Ajuda',
        drawerIcon: () => (
          <Icon
            name="question"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        title: 'Sobre',
        drawerIcon: () => (
          <Icon
            name="info-circle"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        title: 'Sair',
        drawerIcon: () => (
          <Icon
            name="sign-out-alt"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Menu,
    drawerWidth: Dimensions.get('screen').width * 0.85,
    contentOptions: {
      labelStyle: {
        fontWeight: 'normal',
        fontSize: 18,
      },
      activeLabelStyles: {
        color: commonStyles.colors.primaryFontColor,
        fontWeight: 'bold',
      },
    },
  }
);

const menuNavigator = createDrawerNavigator(
  {
    Home: {
      screen: homeStackNavigator,
      navigationOptions: {
        title: 'Início',
        drawerIcon: () => (
          <Icon
            name="home"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'aqua',
      },
    },
    Help: {
      screen: stackHelp,
      navigationOptions: {
        title: 'Ajuda',
        drawerIcon: () => (
          <Icon
            name="question"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        title: 'Sobre',
        drawerIcon: () => (
          <Icon
            name="info-circle"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
    Login: {
      screen: loginNavigator,
      navigationOptions: {
        title: 'Entrar',
        drawerIcon: () => (
          <Icon
            name="sign-in-alt"
            size={25}
            color={commonStyles.colors.primaryFontColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Menu,
    drawerWidth: Dimensions.get('screen').width * 0.85,
    contentOptions: {
      labelStyle: {
        fontWeight: 'normal',
        fontSize: 18,
      },
      activeLabelStyles: {
        color: commonStyles.colors.primaryFontColor,
        fontWeight: 'bold',
      },
    },
  }
);

export const NavigatorUser = createAppContainer(menuNavigatorLoggedUser);
export const Navigator = createAppContainer(menuNavigator);
