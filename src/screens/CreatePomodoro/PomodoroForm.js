/* eslint-disable object-curly-newline */
import React, { useCallback, useRef } from 'react';
import { Text } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import { Box, Button, Input } from '../../components';
import validationSchema from './verifications';
import styles from './styles';
import Storage from '~/services/storage';
import { CREATE_POMODORO } from '~/services/storage/constants';
import pomodoroParser from '~/utils/pomodoroParser';

export default function PomodoroForm() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(() => {
    const pomodoro = pomodoroParser(formRef.current.values);
    Storage.POST({
      type: CREATE_POMODORO,
      payload: { pomodoro },
    });
  }, [formRef]);

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
        onSubmit={handleSubmit}
        innerRef={formRef}
      >
        {(props) => (
          <Box style={styles.capsule}>
            <Box style={{ width: '100%' }}>
              <Text style={styles.textName}>Name:</Text>
              <Input
                width="80%"
                marginLeft="10%"
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
                <Input
                  width={16}
                  marginLeft="10%"
                  onChangeText={props.handleChange('workIntervalMin')}
                  keyboardType="numeric"
                  placeholder="Min"
                />
                <Input
                  width={16}
                  marginLeft="10%"
                  onChangeText={props.handleChange('workIntervalSec')}
                  keyboardType="numeric"
                  placeholder="Sec"
                />
                <Input
                  width={16}
                  marginLeft="10%"
                  onChangeText={props.handleChange('shortIntervalMin')}
                  keyboardType="numeric"
                  placeholder="Min"
                />
                <Input
                  width={16}
                  marginLeft="10%"
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
                <Text style={styles.textMessageError}>{messageError}</Text>
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
                <Input
                  width={16}
                  marginLeft="10%"
                  onChangeText={props.handleChange('longIntervalMin')}
                  keyboardType="numeric"
                  placeholder="Min"
                />
                <Input
                  width={16}
                  marginLeft="10%"
                  onChangeText={props.handleChange('longIntervalSec')}
                  keyboardType="numeric"
                  placeholder="Sec"
                />
                <Input
                  width={48}
                  marginLeft="10%"
                  onChangeText={props.handleChange('cicleSize')}
                  keyboardType="numeric"
                  placeholder="Sec"
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

            <Button
              mode="light"
              width={160}
              onPress={props.handleSubmit}
              paddingHorizontal={24}
              style={styles.addPomodoroBtn}
            >
              <Text>Save Pomodoro</Text>
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
