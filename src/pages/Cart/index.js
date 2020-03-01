import React from 'react';
import { Container, ContainerContant } from './styles';
import Header from '~/components/Header';
import { StatusBar } from 'react-native';

export default function Cart() {
  return (
    <>
      <Container>
        <StatusBar backgroundColor="#3a445d" barStyle="light-content" />
        <Header title="My Cart" />
        <ContainerContant />
      </Container>
    </>
  );
}
