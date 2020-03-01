import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
  padding: 20px 0px;
`;

export const HeaderContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const TextLogo = styled.Text`
  font-size: 20px;
  color: ${colors.terciary};
  font-weight: bold;
  padding: 10px 20px 18px;
  font-family: arial;
  font-style: italic;
`;

export const Perfil = styled.View`
  width: 40px;
  height: 40px;
  background: ${colors.whiteTransparent};
  border-radius: 10px;
  margin-right: 10px;
  align-self: center;
  justify-content: center;
`;

export const ImageBackground = styled.ImageBackground``;
