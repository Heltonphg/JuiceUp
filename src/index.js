import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { colors } from '~/styles';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor={`${colors.primary}`} barStyle="light-content" />
    <Routes />
  </>
);

export default App;
