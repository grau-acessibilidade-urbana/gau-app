import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import CommonStyle from './shared/commonStyle';

import TabHistory from './screens/tabHistory/TabHistory';
import TabProfile from './screens/tabProfile/TabProfile';


const TabNavigator = createMaterialTopTabNavigator({
  Perfil: TabProfile,
  Histórico: TabHistory,
  
}, {
tabBarOptions: {
  labelStyle: {
    fontSize: 16,
    color: CommonStyle.colors.primaryColor
  },
  style: {
    backgroundColor: '#fff',
  },
  indicatorStyle: {
    backgroundColor: CommonStyle.colors.primaryColor,
  }, 
  upperCaseLabel: false,
}
});

export default createAppContainer(TabNavigator);