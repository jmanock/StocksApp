import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StocksScreen from '../screens/StocksScreen';

const config = Platform.select({
  web: { headerMode: 'Home' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const StocksStack = createStackNavigator(
  {
    Stocks: StocksScreen,
  },
  config
);

StocksStack.navigationOptions = {
  tabBarLabel: 'Stocks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

StocksStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StocksStack
});

tabNavigator.path = '';

export default tabNavigator;
