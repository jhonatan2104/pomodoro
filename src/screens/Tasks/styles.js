import styled from 'styled-components/native';

import Constants from 'expo-constants';
import theme from '~/theme';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${theme.colors.background.primary};
  margin-top: ${`${Constants.statusBarHeight}`}px;
`;

export const TaskList = styled.ScrollView``;
