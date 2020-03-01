import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Main from '~/pages/Main';
import Fake from '~/components/fake';
import { colors } from '~/styles';

const AppNavigator = createBottomTabNavigator(
  {
    Main,
    Cart: {
      screen: Fake,
    },
    Add: {
      screen: Fake,
    },
    Statics: {
      screen: Fake,
    },
    Profile: {
      screen: Fake,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let around = false;
        if (routeName === 'Main') {
          iconName = 'view-dashboard';
        } else if (routeName === 'Cart') {
          iconName = 'cart-outline';
        } else if (routeName === 'Add') {
          iconName = 'plus';
        } else if (routeName === 'Statics') {
          iconName = 'chart-arc';
        } else if (routeName === 'Profile') {
          iconName = 'account-outline';
        }

        return <Icon name={iconName} color={tintColor} size={25} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.secondary,
      inactiveTintColor: '#C0C0C0',
      style: {
        backgroundColor: colors.primary,
        borderTopColor: colors.primary,
      },
    },
  },
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
