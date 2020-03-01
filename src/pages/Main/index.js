import React from 'react';
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

export default function Main() {
  const entries = [
    {
      image: require('~/assets/cervejaU.jpg/'),
    },
    {
      image: require('~/assets/cervejaF.jpg/'),
    },
    {
      image: require('~/assets/cervejaR.jpg/'),
    },
  ];
  function _renderItem({ item, index }) {
    return <ItemsMenu item={item} />;
  }
  return (
    <Container>
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
      <TextTitle>Most Popular</TextTitle>
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
