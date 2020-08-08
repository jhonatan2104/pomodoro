import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Label, Box, Button } from '~/components';
import theme from '~/theme';

export const styles = StyleSheet.create({
  textMessageError: {
    marginLeft: '10%',
    color: 'red',
  },
});

export const TextInput = styled(Label).attrs({
  size: 18,
  align: 'center',
  color: '#fff',
})`
  font-weight: bold;
`;

export const Container = styled(Box).attrs({
  bg: theme.colors.background.primary,
})`
  height: 100%;
  width: 100%;
  padding-top: 30%;
`;

export const Row = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const RowInput = styled(Row).attrs({
  paddingHorizontal: 30,
  mt: 5,
})`
  align-items: center;
  justify-content: space-between;
`;

export const TextButton = styled(Label).attrs({
  size: 18,
  align: 'center',
  color: '#fff',
})`
  font-weight: bold;
`;

export const BigButton = styled(Button).attrs({
  mode: 'light',
  paddingHorizontal: 24,
})`
  width: 100%;
`;
