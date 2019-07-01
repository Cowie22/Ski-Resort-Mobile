import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'react-native-elements';

import App from '../../App';
// import Ski from './components/Ski';
// import Trail from './components/Trail';

const Tab = createBottomTabNavigator({
  Home: {
    screen: Ski,
    navigationOptions: {
      tabBarLabel: 'Ski',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Trail: {
    screen: Trail,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  }
});

export const Tabs = createAppContainer(Tab);

// export default Tabs