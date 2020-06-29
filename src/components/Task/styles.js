import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '~/theme';

export const Container = styled.View`
  align-items: flex-start;
  padding-left: 16px;
`;

export const Wrapper = styled.View`
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const CompleteContainer = styled.View`
  align-items: flex-end;
`;
export const Tag = styled.TouchableOpacity`
  border-radius: 50px;
  width: 28px;
  height: 28px;
  border: 1px;

  align-items: center;
  justify-content: center;
  ${({ backgroundColor }) => {
    return css`
      background-color: ${backgroundColor || '#fff'};
    `;
  }}

  ${({ borderColor }) => {
    return css`
      border-color: ${borderColor || '#000'};
    `;
  }}
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${theme.colors.importancy.green};
  margin-top: -8px;
`;
