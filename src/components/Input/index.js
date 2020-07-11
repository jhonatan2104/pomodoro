import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = (props) => {
  return <StyledInput {...props} />;
};

Input.propTypes = {
  width: PropTypes.oneOf([PropTypes.number]),
  backgroundoColor: PropTypes.oneOfType([PropTypes.string]),
  fontSize: PropTypes.oneOf([PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string]),
  borderRadius: PropTypes.oneOf([PropTypes.number]),
  marginLeft: PropTypes.oneOf([PropTypes.number]),
  marginRight: PropTypes.oneOf([PropTypes.number]),
  padding: PropTypes.oneOf([PropTypes.number]),
};

Input.defaultProps = {
  width: '80px',
  backgroundoColor: '#46494D',
  fontSize: 18,
  color: '#fff',
  borderRadius: 8,
  marginLeft: null,
  marginRight: null,
  padding: 8,
};

export default Input;
