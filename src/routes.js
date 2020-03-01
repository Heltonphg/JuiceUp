import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IconWith from '~/components/IconWith';
import Main from '~/pages/Main';
import Cart from '~/pages/Cart';
import Fake from '~/components/fake';
import { colors } from '~/styles';

const AppNavigator = createBottomTabNavigator(
  {
    Cart,
    Main,
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
          around = true;
        } else if (routeName === 'Statics') {
          iconName = 'chart-arc';
        } else if (routeName === 'Profile') {
          iconName = 'account-outline';
        }

        return (
          <IconWith
            focused={focused}
            isAround={around}
            name={iconName}
            color={tintColor}
            size={25}
          />
        );
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
