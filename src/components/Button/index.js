/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Label from '../Label';
import theme from '~/theme';

const Button = (props) => {
  return (
    <Container {...props}>
      <Label>{props.children}</Label>
    </Container>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.string]),
  paddingHorizontal: PropTypes.oneOfType([PropTypes.number]),
  paddingVertical: PropTypes.oneOfType([PropTypes.number]),
};

Button.defaultProps = {
  backgroundColor: theme.colors.button.primary,
  paddingHorizontal: 32,
  paddingVertical: 16,
};

export default Button;
