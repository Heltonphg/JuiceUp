import React from 'react';
import {
  Container,
  TextLogo,
  HeaderContainer,
  Perfil,
  ImageBackground,
} from './styles';
import HeaderMenu from '~/components/HeaderMenu';
export default function Main() {
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

      <HeaderMenu />
    </Container>
  );
}
