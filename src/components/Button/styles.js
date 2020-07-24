import styled, { css } from 'styled-components/native';
import LabelComponent from '../Label';
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

  border-radius: ${theme.roundness.sm}px;

  background-color: ${({ mode }) => {
    return mode === 'dark'
      ? theme.colors.button.dark.bg
      : theme.colors.button.light.bg;
  }};

  ${({ height }) => {
    return (
      !!height &&
      css`
        height: ${height}px;
      `
    );
  }}

  ${({ width }) => {
    return (
      !!width &&
      css`
        width: ${width}px;
      `
    );
  }}
`;

export const Label = styled(LabelComponent)`
  color: ${({ mode }) => {
    return mode === 'dark'
      ? theme.colors.button.dark.color
      : theme.colors.button.light.color;
  }};
`;
