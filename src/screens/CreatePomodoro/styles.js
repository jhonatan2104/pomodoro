import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addPomodoroBtn: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
  },
  capsule: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2D2D2D',
  },
  textName: {
    color: 'white',
    fontSize: 16,
    marginLeft: '10%',
    marginTop: '20%',
  },
  textWorkInterval: {
    color: 'white',
    fontSize: 16,
    marginLeft: '10%',
    marginTop: 16,
  },
  textShortInterval: {
    color: 'white',
    fontSize: 16,
    marginLeft: '20%',
    marginTop: 16,
  },
  textMessageError: {
    marginLeft: '10%',
    color: 'red',
  },
});

export default styles;

/*
import styled from 'styled-components/native';

export const Container = styled.View``;
*/
