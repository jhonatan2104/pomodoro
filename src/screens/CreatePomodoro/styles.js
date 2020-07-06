import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addPomodoroBtn: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
  },
  textAddPomodoroBtn: {
    color: 'white',
  },
  capsule: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2D2D2D',
  },
  inputName: {
    color: 'white',
    padding: 8,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: '#46494D',
    width: '80%',
    marginLeft: '10%',
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
  workIntervalInputs: {
    color: 'white',
    backgroundColor: '#46494D',
    padding: 8,
    fontSize: 16,
    borderRadius: 6,
    width: 16,
    marginLeft: '10%',
  },
  cicleIntervalInput: {
    color: 'white',
    backgroundColor: '#46494D',
    padding: 8,
    fontSize: 16,
    borderRadius: 6,
    width: 48,
    marginLeft: '10%',
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
