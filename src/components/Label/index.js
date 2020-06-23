import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './styles';

const Label = (prop) => {
  return <Text {...prop} />;
};

Label.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
  family: PropTypes.oneOfType([PropTypes.string]),
  color: PropTypes.oneOfType([PropTypes.string]),
};
Label.defaultProps = {
  size: 15,
  family: null,
  align: 'center',
  color: null,
};

export default Label;
