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
  margin-left: ${({ marginLeft }) => {
    return String(marginLeft).includes('%') ? marginLeft : `${marginLeft}px`;
  }};
  margin-top: ${({ marginTop }) => {
    return String(marginTop).includes('%') ? marginTop : `${marginTop}px`;
  }};
  padding: ${({ padding }) => {
    return `${padding}px`;
  }};
  width: ${({ width }) => {
    return String(width).includes('%') ? width : `${width}px`;
  }};

  height: ${({ height }) => {
    return String(height).includes('%') ? height : `${height}px`;
  }};
`;
