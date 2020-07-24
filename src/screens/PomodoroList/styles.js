import styled from 'styled-components/native';

import { Button as ButtonComponent } from '~/components';
import theme from '~/theme';

export const Button = styled(ButtonComponent)`
  margin: auto;

  margin-bottom: 16px;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.colors.background.primary};
`;

export const PomodorosList = styled.ScrollView`
  margin: 12px 8px;
`;
