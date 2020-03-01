import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  height: 85px;
  margin-top: 20px;
  background: transparent;
`;
export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 65px;
  height: 65px;
  background: ${colors.white};
  border-radius: 32px;
  margin-left: 12px;
  align-self: center;
  justify-content: center;
  border-width: 3px;
  border-color: #999;
  align-items: center;
`;

export const TabItemContainer = styled.View`
  justify-content: center;
`;

export const ImageIcon = styled.Image`
  width: 45px;
  height: 45px;
`;

export const TextIcon = styled.Text`
  font-size: 14px;
  color: ${colors.lighter};
  font-weight: 500;
  margin-left: 12px;
  text-align: center;
`;
