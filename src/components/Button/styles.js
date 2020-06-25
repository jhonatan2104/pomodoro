import styled, { css } from 'styled-components/native';

import theme from '~/theme';

export const Container = styled.TouchableOpacity`
  
  ${({ paddingHorizontal }) => {
    return (
      !!paddingHorizontal &&
      css`
        padding-horizontal: ${paddingHorizontal}px;
      `
    );
  }}

  ${({ paddingVertical }) => {
    return (
      !!paddingVertical &&
      css`
        padding-vertical: ${paddingVertical}px;
      `
    );
  }}

  ${({ backgroundColor }) => {
    return (
      !!backgroundColor &&
      css`
        background-color: ${backgroundColor};
      `
    );
  }}
  

  border-radius: ${theme.roundness.sm};
`;
