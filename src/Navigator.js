import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SearchPlaces from './screens/SearchPlaces';
import Menu from './screens/Menu';
import { Dimensions } from 'react-native';
import Profile from './screens/Profile';
import About from './screens/About';

const menuNavigator = createDrawerNavigator({
    Home: { screen: SearchPlaces, navigationOptions: { title: 'Início' } },
    Profile: { screen: Profile, navigationOptions: { title: 'Perfil' } },
    History: { screen: Profile, navigationOptions: { title: 'Histórico' } },
    About: { screen: About, navigationOptions: { title: 'Sobre' } }
}, {
    initialRouteName: 'Home',
    contentComponent: Menu,
    drawerWidth: Dimensions.get('screen').width * 0.85
});

export default createAppContainer(menuNavigator);