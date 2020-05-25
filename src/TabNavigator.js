import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import CommonStyle from './shared/commonStyle';

class TabProfile extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class TabHistory extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

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