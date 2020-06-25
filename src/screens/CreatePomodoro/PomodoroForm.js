import React from 'react';
// eslint-disable-next-line no-unused-vars
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import { Formik } from 'formik';

const styles = StyleSheet.create({
  button: {
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
  text: {
    color: 'white',
  },
  capsule: {
    width: '100%',
    height: '100%',
  },
  input: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

export default function PomodoroForm() {
  return (
    <View>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikProps) => (
          <View style={styles.capsule}>
            <TextInput
              style={styles.input}
              onChange={formikProps.handleChange('name')}
              value={formikProps.values.name}
            />

            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 10,
                fontSize: 18,
                borderRadius: 6,
              }}
              onChange={formikProps.handleChange('name')}
              value={formikProps.values.name}
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={formikProps.handleSubmit}
              activeOpacity={0.7}
            >
              <Text style={styles.text}>Save pomodoro</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
