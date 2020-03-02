import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.hasberry};
  padding: 10px 8px;
  background: ${colors.primary};
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  justify-content: space-between;
`;

export const ItemList = styled.View`
  height: 160px;
  border-radius: 18px;
  background: #1e2845;
  flex-direction: row;
  margin: 5px 0 4px 0;
`;

export const ContentImage = styled.View`
  border-radius: 18px;
  flex: 0.4;
`;
export const ContentInfo = styled.View`
  border-radius: 18px;
  flex: 0.6;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.terciary};
  font-weight: bold;
  font-family: arial;
  margin: 4px 20px;
`;
export const Price = styled.Text`
  font-size: 20px;
  color: ${colors.terciary};
  font-weight: bold;
  font-family: arial;
  margin: 4px 20px;
`;
export const Subtitle = styled.Text`
  font-size: 13px;
  color: #666;
  font-family: arial;
  margin: 2px 20px;
`;
export const Qtd = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: arial;
  margin-top: 18px;
`;

export const ImageBackground = styled.ImageBackground``;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

export const AroundButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 15px;
  border-width: 2px;
  border-color: #555;
  justify-content: center;
  align-items: center;
  margin: 15px 20px;
`;

export const ButtonBuy = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: ${colors.secondary};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
