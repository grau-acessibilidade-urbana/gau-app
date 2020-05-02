import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import Menu from './screens/menu/Menu';
import SearchPlaces from './screens/searchPlaces/SearchPlaces';
import Profile from './screens/profile/Profile';
import About from './screens/about/About';
import AuthenticationOptions from './screens/authenticationOptions/AuthenticationOptions';

const menuNavigator = createDrawerNavigator({
    Home: { screen: SearchPlaces, navigationOptions: { title: 'Início' } },
    Profile: { screen: Profile, navigationOptions: { title: 'Perfil' } },
    History: { screen: Profile, navigationOptions: { title: 'Histórico' } },
    About: { screen: About, navigationOptions: { title: 'Sobre' } },
    Logout: {screen: AuthenticationOptions, navigationOptions: {title: "Sair"}}
}, {
    initialRouteName: 'Home',
    contentComponent: Menu,
    drawerWidth: Dimensions.get('screen').width * 0.85
});

export default createAppContainer(menuNavigator);