import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  background-color: ${({ backgroundoColor }) => backgroundoColor};
  font-size: ${({ fontSize }) => {
    return `${fontSize}px`;
  }};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => {
    return `${borderRadius}px`;
  }};
  padding: ${({ padding }) => {
    return `${padding}px`;
  }};
  width: ${({ width }) => {
    return `${width}px`;
  }};
`;
