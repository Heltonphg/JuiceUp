import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ContainerTabs = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const TabsIntems = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Item = styled.View`
  width: 240px;
  height: 370px;
  background: ${colors.white};
  border-radius: 17px;
  margin-left: 20px;
  margin-right: 7px;
  align-self: center;
`;

export const TextTitle = styled.Text`
  font-size: 17px;
  color: ${colors.terciary};
  font-weight: bold;
  font-family: arial;
  margin: 20px 26px;
`;

export const ImageBackground = styled.ImageBackground``;
