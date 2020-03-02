import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Item,
  ImageBackground,
  ContainerTabs,
  TextTitle,
  ContainerImage,
  Price,
  ContainerCard,
  ContainerText,
} from './styles';
export default function ItemsMenu({ item, navigation }) {
  return (
    <ContainerTabs>
      <Item>
        <ImageBackground source={item.image} style={styleImage}>
          <ContainerImage>
            <ContainerCard>
              <ContainerText>
                <TextTitle>{item.title}</TextTitle>
                <Price>$ {item.price}</Price>
              </ContainerText>

              <Icon
                onPress={() => navigation.push('Cart')}
                style={{ paddingRight: 10, marginTop: 10 }}
                name="cart-outline"
                color="#fff"
                size={25}
              />
            </ContainerCard>
          </ContainerImage>
        </ImageBackground>
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
