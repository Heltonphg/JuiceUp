import React from 'react';

import { Item, ImageBackground, ContainerTabs, TextTitle } from './styles';

export default function ItemsMenu({ item }) {
  return (
    <ContainerTabs>
      <Item>
        <ImageBackground source={item.image} style={styleImage} />
      </Item>
    </ContainerTabs>
  );
}
const styleImage = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: 17,
};
