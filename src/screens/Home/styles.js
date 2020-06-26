import styled from 'styled-components/native';

import { Button as ButtonComponent } from '~/components';

export const Button = styled(ButtonComponent)`
  margin: auto;

  margin-bottom: 16px;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: #2d2d2d;
`;

export const PomodorosList = styled.ScrollView`
  margin: 16px 8px;
`;
