import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Button = (prop) => {
  return <Container {...prop} />;
};

Button.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  color: PropTypes.oneOfType([PropTypes.string]),
};
Button.defaultProps = {
  size: 100,
  align: 'center',
  color: '#6D7CFF',
};

export default Button;
