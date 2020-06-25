/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Label from '../Label';

const Button = (props) => {
  return (
    <Container {...props}>
      <Label color={props.color}>{props.children}</Label>
    </Container>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.string]),
  color: PropTypes.oneOfType([PropTypes.string]),
  paddingHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  backgroundColor: '#6D7CFF',
  color: '#fff',
  paddingHorizontal: '48',
  paddingVertical: '16',
};

export default Button;
