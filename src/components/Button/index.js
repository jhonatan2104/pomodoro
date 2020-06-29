/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label } from './styles';

const Button = (props) => {
  const { mode } = props;
  return (
    <Container activeOpacity={0.8} {...{ ...props, mode }}>
      <Label {...{ mode }}>{props.children}</Label>
    </Container>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
  paddingHorizontal: PropTypes.oneOfType([PropTypes.number]),
  paddingVertical: PropTypes.oneOfType([PropTypes.number]),
  onPress: PropTypes.oneOfType([PropTypes.func]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.func]),
  marginHorizontal: PropTypes.oneOfType([PropTypes.number]),
  marginVertical: PropTypes.oneOfType([PropTypes.number]),
};

Button.defaultProps = {
  paddingHorizontal: 32,
  paddingVertical: 16,
  onPress: null,
  width: null,
  height: null,
  marginHorizontal: 8,
  marginVertical: 16,
};

export default Button;
