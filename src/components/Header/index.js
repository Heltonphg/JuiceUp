import React from 'react';
import { TouchableOpacity, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Title } from './styles';

export default function Header({ title, navigation }) {
  function voltar() {
    navigation.goBack();
  }
  return (
    <Container>
      <StatusBar backgroundColor="#3a445d" barStyle="light-content" />
      <TouchableOpacity onPress={() => voltar()}>
        <Icon
          style={{ paddingLeft: 10 }}
          name="arrow-left"
          size={25}
          color="#f0f0f0"
        />
      </TouchableOpacity>
      <Title>{title}</Title>
      <View />
    </Container>
  );
}
