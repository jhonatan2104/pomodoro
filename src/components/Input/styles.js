import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  background-color: ${({ backgroundoColor }) => backgroundoColor};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin-left: ${({ marginLeft }) => marginLeft};
  padding: ${({ padding }) => {
    return `${padding}px`;
  }};
  width: ${({ width }) => width};
`;
