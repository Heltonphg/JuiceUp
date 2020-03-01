import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  background: ${colors.hasberry};
  height: 66px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.terciary};
  font-weight: bold;
  font-family: arial;
  text-align: center;
  padding: 0 20px 0 0px;
`;
