import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding-left: 8px;
`;

export const Tag = styled.View`
  border-radius: 50;
  width: 28px;
  height: 28px;
  border: 1px;

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
