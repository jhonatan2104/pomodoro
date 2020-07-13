import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';
import theme from '~/theme';

const Input = (props) => {
  return <StyledInput {...props} />;
};

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundoColor: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.number,
  onChangeText: PropTypes.func,
};

Input.defaultProps = {
  width: theme.colors.input.width,
  backgroundoColor: theme.colors.input.bgColor,
  fontSize: theme.colors.input.fontSize,
  color: theme.colors.input.textColor,
  borderRadius: theme.roundness.sm,
  marginLeft: 0,
  marginTop: 0,
  padding: theme.colors.input.padding,
  onChangeText: null,
};

export default Input;
