import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Title } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => alert('ola')}>
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
