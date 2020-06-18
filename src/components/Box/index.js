import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Box = (props) => {
  return <Container {...props} />;
};

Box.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  row: PropTypes.oneOfType([PropTypes.bool]),
  self: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center']),
  // eslint-disable-next-line react/require-default-props
  bg: PropTypes.oneOfType([PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexGrow: PropTypes.oneOfType([PropTypes.number]),
  justifyStart: PropTypes.oneOfType([PropTypes.bool]),
  justifyCenter: PropTypes.oneOfType([PropTypes.bool]),
  justifyEnd: PropTypes.oneOfType([PropTypes.bool]),
  justifyBetween: PropTypes.oneOfType([PropTypes.bool]),
  justifyAround: PropTypes.oneOfType([PropTypes.bool]),
  alignStart: PropTypes.oneOfType([PropTypes.bool]),
  alignCenter: PropTypes.oneOfType([PropTypes.bool]),
  alignEnd: PropTypes.oneOfType([PropTypes.bool]),
  shadowXs: PropTypes.oneOfType([PropTypes.bool]),
  shadowSm: PropTypes.oneOfType([PropTypes.bool]),
  shadowMd: PropTypes.oneOfType([PropTypes.bool]),
  shadowLg: PropTypes.oneOfType([PropTypes.bool]),
  roundedSm: PropTypes.oneOfType([PropTypes.bool]),
  roundedMd: PropTypes.oneOfType([PropTypes.bool]),
  roundedFull: PropTypes.oneOfType([PropTypes.bool]),
  roundedLg: PropTypes.oneOfType([PropTypes.bool]),
};

Box.defaultProps = {
  width: null,
  height: null,
  minHeight: null,
  row: null,
  self: null,
  mt: null,
  mb: null,
  ml: null,
  mr: null,
  paddingHorizontal: null,
  paddingVertical: null,
  flexGrow: null,
  justifyStart: false,
  justifyCenter: false,
  justifyEnd: false,
  justifyBetween: false,
  justifyAround: false,
  alignStart: false,
  alignCenter: false,
  alignEnd: false,
  shadowXs: false,
  shadowSm: false,
  shadowMd: false,
  shadowLg: false,
  roundedSm: false,
  roundedMd: false,
  roundedFull: false,
  roundedLg: false,
};

export default Box;
