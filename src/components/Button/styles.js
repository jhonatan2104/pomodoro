import styled, { css } from 'styled-components/native';

export const Container = styled.Button`
  ${({ size }) => {
    return (
      !!size &&
      css`
        font-size: ${size}px;
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
