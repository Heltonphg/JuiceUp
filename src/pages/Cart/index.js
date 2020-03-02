import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  Container,
  ItemList,
  ContentImage,
  ImageBackground,
  ContainerButtons,
  Qtd,
  Title,
  Price,
  ButtonBuy,
  Subtitle,
  ContentInfo,
  AroundButton,
} from './styles';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';

export default function Cart({ navigation }) {
  return (
    <>
      <Header title="My Cart" navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: '#3a445d' }}>
        <Container>
          <ScrollView style={{ flex: 1 }}>
            <ItemList>
              <ContentImage>
                <ImageBackground
                  source={require('~/assets/cervejaR.jpg')}
                  style={styleImage}
                />
              </ContentImage>
              <ContentInfo>
                <Title>Aplle Juice</Title>
                <Subtitle>Lorem ipsum dolar sit amet</Subtitle>
                <Price>$8.65</Price>
                <ContainerButtons>
                  <AroundButton>
                    <Icon name="plus" color={colors.terciary} size={20} />
                  </AroundButton>
                  <Qtd>1</Qtd>
                  <AroundButton>
                    <Icon name="minus" color={colors.terciary} size={20} />
                  </AroundButton>
                </ContainerButtons>
              </ContentInfo>
            </ItemList>
            <ItemList>
              <ContentImage>
                <ImageBackground
                  source={require('~/assets/cervejaU.jpg')}
                  style={styleImage}
                />
              </ContentImage>
              <ContentInfo>
                <Title>Grapes Juice</Title>
                <Subtitle>Lorem ipsum dolar sit amet</Subtitle>
                <Price>$31.50</Price>
                <ContainerButtons>
                  <AroundButton>
                    <Icon name="plus" color={colors.terciary} size={20} />
                  </AroundButton>
                  <Qtd>3</Qtd>
                  <AroundButton>
                    <Icon name="minus" color={colors.terciary} size={20} />
                  </AroundButton>
                </ContainerButtons>
              </ContentInfo>
            </ItemList>
            <ItemList>
              <ContentImage>
                <ImageBackground
                  source={require('~/assets/PorganicU.jpg')}
                  style={styleImage}
                />
              </ContentImage>
              <ContentInfo>
                <Title>BlackBerry Juice</Title>
                <Subtitle>Lorem ipsum dolar sit amet</Subtitle>
                <Price>$15.60</Price>
                <ContainerButtons>
                  <AroundButton>
                    <Icon name="plus" color={colors.terciary} size={20} />
                  </AroundButton>
                  <Qtd>1</Qtd>
                  <AroundButton>
                    <Icon name="minus" color={colors.terciary} size={20} />
                  </AroundButton>
                </ContainerButtons>
              </ContentInfo>
            </ItemList>
          </ScrollView>
          <ButtonBuy>
            <Price>$55.75</Price>
            <Title>PAY</Title>
          </ButtonBuy>
        </Container>
      </View>
    </>
  );
}

const styleImage = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: 17,
};
