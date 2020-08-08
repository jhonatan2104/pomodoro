/* eslint-disable object-curly-newline */
import React, { useCallback, useRef } from 'react';
import { Text } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import { Box, Input } from '../../components';
import validationSchema from './verifications';
import {
  styles,
  TextInput,
  Container,
  Row,
  Column,
  RowInput,
  TextButton,
  BigButton,
} from './styles';
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
          <Container>
            <Row>
              <Row paddingHorizontal={30}>
                <Column>
                  <TextInput>Name</TextInput>
                  <Row mt={5}>
                    <Input
                      width="100%"
                      onChangeText={props.handleChange('name')}
                    />
                  </Row>
                  <ErrorMessage
                    name="name"
                    render={(messageError) => (
                      <Text style={styles.textMessageError}>
                        {messageError}
                      </Text>
                    )}
                  />
                </Column>
              </Row>

              <Row mt={20}>
                <Column alignCenter>
                  <TextInput>Work Interval</TextInput>
                  <RowInput>
                    <Input
                      width={60}
                      onChangeText={props.handleChange('workIntervalMin')}
                      keyboardType="numeric"
                      placeholder="Min"
                    />
                    <Input
                      width={60}
                      onChangeText={props.handleChange('workIntervalSec')}
                      keyboardType="numeric"
                      placeholder="Sec"
                    />
                  </RowInput>
                </Column>

                <Column alignCenter>
                  <TextInput>Short Interval</TextInput>
                  <RowInput>
                    <Input
                      width={60}
                      onChangeText={props.handleChange('shortIntervalMin')}
                      keyboardType="numeric"
                      placeholder="Min"
                    />
                    <Input
                      width={60}
                      onChangeText={props.handleChange('shortIntervalSec')}
                      keyboardType="numeric"
                      placeholder="Sec"
                    />
                  </RowInput>
                </Column>
              </Row>

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

              <Row mt={20}>
                <Column alignCenter>
                  <TextInput>Long Interval</TextInput>
                  <RowInput>
                    <Input
                      width={60}
                      onChangeText={props.handleChange('longIntervalMin')}
                      keyboardType="numeric"
                      placeholder="Min"
                    />
                    <Input
                      width={60}
                      onChangeText={props.handleChange('longIntervalSec')}
                      keyboardType="numeric"
                      placeholder="Sec"
                    />
                  </RowInput>
                </Column>
                <Column alignCenter>
                  <TextInput>Cicle Size</TextInput>
                  <Row mt={5} justifyCenter paddingHorizontal={30}>
                    <Input
                      width="100%"
                      onChangeText={props.handleChange('cicleSize')}
                      keyboardType="numeric"
                      placeholder="Number"
                    />
                  </Row>
                </Column>
              </Row>

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
            </Row>
            <Row justifyCenter mt={40} paddingHorizontal={30}>
              <BigButton onPress={props.handleSubmit}>
                <TextButton>Save</TextButton>
              </BigButton>
            </Row>
          </Container>
        )}
      </Formik>
    </Box>
  );
}
