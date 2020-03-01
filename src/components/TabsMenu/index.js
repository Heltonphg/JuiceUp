import React from 'react';
import {
  Container,
  TabsContainer,
  TabItem,
  ImageIcon,
  TextIcon,
  TabItemContainer,
} from './styles';
import uva from '~/assets/uva.png';
import abacate from '~/assets/abacate.png';
import apple from '~/assets/apple.png';
import manga from '~/assets/manga.png';
import pineapple from '~/assets/abacaxi.png';
import lemon from '~/assets/limao.png';

export default function TabsMenu() {
  return (
    <Container>
      <TabsContainer>
        <TabItemContainer>
          <TabItem>
            <ImageIcon source={lemon} />
          </TabItem>
          <TextIcon>Lemon</TextIcon>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={uva} />
          </TabItem>
          <TextIcon>Grapes</TextIcon>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={apple} />
          </TabItem>
          <TextIcon>Apple</TextIcon>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={pineapple} />
          </TabItem>
          <TextIcon>Pineapple</TextIcon>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={manga} />
          </TabItem>
          <TextIcon>Mango</TextIcon>
        </TabItemContainer>

        <TabItemContainer>
          <TabItem>
            <ImageIcon source={abacate} />
          </TabItem>
          <TextIcon>Avocado</TextIcon>
        </TabItemContainer>
      </TabsContainer>
    </Container>
  );
}
