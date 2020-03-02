import React, { useState } from 'react';
import {
  Container,
  TextLogo,
  HeaderContainer,
  Perfil,
  ImageBackground,
  TextTitle,
} from './styles';
import TabsMenu from '~/components/TabsMenu';
import ItemsMenu from '~/components/ItemsMenu';
import Carousel from 'react-native-snap-carousel';
import { StatusBar } from 'react-native';
import { colors } from '~/styles';

export default function Main({ navigation }) {
  const entries = [
    {
      image: require('~/assets/cervejaU.jpg/'),
      title: 'Grapes Juice',
      price: '10.50',
    },
    {
      image: require('~/assets/cervejaF.jpg/'),
      title: 'Pineapple Juice',
      price: '9.40',
    },
    {
      image: require('~/assets/cervejaR.jpg/'),
      title: 'Apple Juice',
      price: '8.65',
    },
  ];
  function _renderItem({ item, index }) {
    return <ItemsMenu navigation={navigation} item={item} />;
  }

  return (
    <Container>
      <StatusBar
        backgroundColor={`${colors.primary}`}
        barStyle="light-content"
      />
      <HeaderContainer>
        <TextLogo>JuiceUp</TextLogo>
        <Perfil>
          <ImageBackground
            source={require('~/assets/celebrite.png')}
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
          />
        </Perfil>
      </HeaderContainer>
      <TabsMenu />
      <TextTitle onPress={() => navigation.push('Cart')}>
        Most Popular
      </TextTitle>

      <Carousel
        firstItem={2}
        hasParallaxImages={true}
        layout="stack"
        layoutCardOffset={17}
        data={entries}
        renderItem={_renderItem}
        sliderWidth={400}
        itemWidth={300}
      />
    </Container>
  );
}
