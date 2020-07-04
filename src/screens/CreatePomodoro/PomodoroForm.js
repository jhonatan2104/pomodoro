/* eslint-disable object-curly-newline */
import React from 'react';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import { Box } from '../../components';
import validationSchema from './verifications';
import styles from './styles';

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
              <ErrorMessage
                name="name"
                render={(messageError) => (
                  <Text style={styles.textMessageError}>{messageError}</Text>
                )}
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
                  placeholder="Min"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('workIntervalSec')}
                  keyboardType="numeric"
                  placeholder="Sec"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('shortIntervalMin')}
                  keyboardType="numeric"
                  placeholder="Min"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('shortIntervalSec')}
                  keyboardType="numeric"
                  placeholder="Sec"
                />
              </Box>
            </Box>

            <ErrorMessage
              name="workIntervalMin"
              render={(messageError) => (
                <Text style={styles.textMessageError}>{messageError}</Text>
              )}
            />
            <ErrorMessage
              name="workIntervalSec"
              render={(messageError) => (
                <Text style={{ marginLeft: '10%', color: 'red' }}>
                  {messageError}
                </Text>
              )}
            />
            <ErrorMessage
              name="shortIntervalMin"
              render={(messageError) => (
                <Text style={styles.textMessageError}>{messageError}</Text>
              )}
            />
            <ErrorMessage
              name="shortIntervalSec"
              render={(messageError) => (
                <Text style={styles.textMessageError}>{messageError}</Text>
              )}
            />

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
                  placeholder="Min"
                />
                <TextInput
                  style={styles.workIntervalInputs}
                  onChangeText={props.handleChange('longIntervalSec')}
                  keyboardType="numeric"
                  placeholder="Sec"
                />
                <TextInput
                  style={styles.cicleIntervalInput}
                  onChangeText={props.handleChange('cicleSize')}
                  keyboardType="numeric"
                />
              </Box>
            </Box>

            <ErrorMessage
              name="longIntervalMin"
              render={(messageError) => (
                <Text style={styles.textMessageError}>{messageError}</Text>
              )}
            />
            <ErrorMessage
              name="longIntervalSec"
              render={(messageError) => (
                <Text style={styles.textMessageError}>{messageError}</Text>
              )}
            />
            <ErrorMessage
              name="cicleSize"
              render={(messageError) => (
                <Text style={styles.textMessageError}>{messageError}</Text>
              )}
            />

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
