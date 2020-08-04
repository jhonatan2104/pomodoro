import styled from 'styled-components/native';
import { Box } from '~/components';
import theme from '~/theme';

export const Container = styled(Box).attrs({
  flexGrow: 1,
})`
  background-color: ${theme.colors.background.primary};
  align-items: center;
  justify-content: center;
`;
