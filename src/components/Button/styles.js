import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ backgroundColor }) => {
    return (
      !!backgroundColor &&
      css`
        background-color: ${backgroundColor};
      `
    );
  }}


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
  
  align-items: center;
  justify-content: center;
  border-radius: 8;
`;
