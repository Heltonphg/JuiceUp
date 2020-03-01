import React from 'react';

import {
  Container,
  Item,
  TabsIntems,
  ImageBackground,
  ContainerTabs,
  TextTitle,
} from './styles';

export default function ItemsMenu() {
  return (
    <Container>
      <TextTitle>Most popular</TextTitle>
      <ContainerTabs>
        <TabsIntems>
          <Item>
            <ImageBackground
              source={require('~/assets/cervejaR.jpg')}
              style={styleImage}
            />
          </Item>
          <Item />
        </TabsIntems>
      </ContainerTabs>
    </Container>
  );
}
const styleImage = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: 17,
};
