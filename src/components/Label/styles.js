import styled, { css } from 'styled-components/native';

export const Text = styled.Text`
  ${({ size }) => {
    return (
      !!size &&
      css`
        font-size: ${size}px;
      `
    );
  }}

  ${({ align }) => {
    return (
      !!align &&
      css`
        text-align: ${align};
      `
    );
  }}

  ${({ family }) => {
    return (
      !!family &&
      css`
        font-family: ${family};
      `
    );
  }}

  ${({ color }) => {
    return (
      !!color &&
      css`
        color: ${color};
      `
    );
  }}
`;
