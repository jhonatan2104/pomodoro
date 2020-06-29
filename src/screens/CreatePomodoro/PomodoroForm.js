/* eslint-disable object-curly-newline */
import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Box } from '../../components';

const styles = StyleSheet.create({
  AddPomodoroBtn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 8,
    height: 16,
    width: 160,
    backgroundColor: '#6D7CFF',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 24,
    borderRadius: 8,
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
});

const validationSchema = yup.object({
  name: yup.string().required(),
  workIntervalMin: yup.number().required().integer(),
  workIntervalSec: yup
    .number()
    .required()
    .lessThan(60, 'Number must be less than 60 secs')
    .integer(),
  shortIntervalMin: yup.number().required().integer(),
  shortIntervalSec: yup
    .number()
    .required()
    .lessThan(60, 'Number must be less than 60 secs')
    .integer(),
  longIntervalMin: yup.number().required().integer(),
  longIntervalSec: yup
    .number()
    .required()
    .lessThan(60, 'Number must be less than 60 secs')
    .integer(),
  cicleSize: yup.number().required().integer(),
});

export default function PomodoroForm() {
  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          workIntervalMin: 25,
          workIntervalSec: 0,
          shortIntervalMin: 5,
          shortIntervalSec: 0,
          longIntervalMin: 15,
          longIntervalSec: 0,
          cicleSize: 4,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Box style={styles.capsule}>
            <Box style={{ width: '100%' }}>
              <Text style={styles.textName}>Name:</Text>
              <TextInput
                style={styles.inputName}
                onChangeText={props.handleChange('name')}
              />
            </Box>

            <Box
              style={{
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <Text style={styles.textWorkInterval}>Work Interval:</Text>
              <Text style={styles.textShortInterval}>Short Interval:</Text>
            </Box>

            <Box>
              <Box style={{ flexDirection: 'row' }}>
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('workIntervalMin')}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('workIntervalSec')}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('shortIntervalMin')}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('shortIntervalSec')}
                  keyboardType="numeric"
                />
              </Box>
            </Box>

            <Box
              style={{
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <Text style={styles.textWorkInterval}>Long Interval:</Text>
              <Text style={styles.textShortInterval}>Cicle Size:</Text>
            </Box>

            <Box>
              <Box style={{ flexDirection: 'row' }}>
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('longIntervalMin')}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('longIntervalSec')}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.cicleIntervalInput}
                  onChangeText={props.handleChange('cicleSize')}
                  keyboardType="numeric"
                />
              </Box>
            </Box>

            <TouchableOpacity
              style={styles.AddPomodoroBtn}
              onPress={props.handleSubmit}
              activeOpacity={0.7}
            >
              <Text style={styles.textAddPomodoroBtn}>Save pomodoro</Text>
            </TouchableOpacity>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
