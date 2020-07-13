import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = (props) => {
  return <StyledInput {...props} />;
};

Input.propTypes = {
  width: PropTypes.number,
  backgroundoColor: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  borderRadius: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
};

Input.defaultProps = {
  width: 80,
  backgroundoColor: '#46494D',
  fontSize: 18,
  color: '#fff',
  borderRadius: 8,
  marginLeft: 0,
  marginRight: 0,
  padding: 8,
};

export default Input;
