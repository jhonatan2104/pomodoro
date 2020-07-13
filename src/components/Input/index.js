import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

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
  width: 80,
  backgroundoColor: '#46494D',
  fontSize: 16,
  color: '#fff',
  borderRadius: 8,
  marginLeft: 0,
  marginTop: 0,
  padding: 8,
  onChangeText: null,
};

export default Input;
