import styled from 'styled-components/native';

import theme from '~/theme';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.colors.background.primary};
`;

export const TaskList = styled.ScrollView`
  margin: 12px 8px;
`;
