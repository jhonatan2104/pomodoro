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
    alignSelf: 'center',
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
});

export default function PomodoroForm() {
  return (
    <View>
      <Formik
        initialValues={{
          name: '',
          minWorkInterval: 25,
          secWorkInterval: 0,
          shortInterval: 5,
          longInterval: 15,
          cicleSize: 4,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View style={styles.capsule}>
            <View>
              <Text style={styles.textName}>Name:</Text>
              <TextInput
                style={styles.inputName}
                onChangeText={props.handleChange('name')}
              />
            </View>

            <View>
              <Text style={styles.textWorkInterval}>Work Interval:</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{
                    color: 'white',
                    backgroundColor: '#46494D',
                    padding: 8,
                    fontSize: 18,
                    borderRadius: 6,
                    width: 16,
                    marginLeft: '10%',
                  }}
                  onChangeText={props.handleChange('minWorkInterval')}
                  keyboardType="numeric"
                />
                <TextInput
                  style={{
                    color: 'white',
                    backgroundColor: '#46494D',
                    padding: 8,
                    fontSize: 18,
                    borderRadius: 6,
                    width: 48,
                    marginLeft: 16,
                  }}
                  onChangeText={props.handleChange('secWorkInterval')}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.AddPomodoroBtn}
              onPress={props.handleSubmit}
              activeOpacity={0.7}
            >
              <Text style={styles.textAddPomodoroBtn}>Save pomodoro</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
