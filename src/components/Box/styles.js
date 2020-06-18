/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components/native';

const getAlignItems = (alignStart, alignCenter) => {
  if (alignStart) return 'flex-start';
  if (alignCenter) return 'center';
  return 'flex-start';
};
const getJustifyItems = (
  justifyStart,
  justifyCenter,
  justifyBetween,
  justifyAround,
) => {
  if (justifyStart) return 'flex-start';
  if (justifyCenter) return 'center';
  if (justifyBetween) return 'space-between';
  if (justifyAround) return 'space-around';
  return 'flex-start';
};
const getElevation = ({
  shadowSm,
  shadowMd,
  shadowLg,
  shadowXs,
  theme: { shadow },
}) => {
  if (shadowSm) return shadow.sm;
  if (shadowXs) return shadow.xs;
  if (shadowMd) return shadow.md;
  if (shadowLg) return shadow.lg;
  return 0;
};

const getRoundness = ({
  roundedSm,
  roundedMd,
  roundedLg,
  roundedFull,
  theme: { roundness },
}) => {
  if (roundedSm) return roundness.sm;
  if (roundedMd) return roundness.md;
  if (roundedLg) return roundness.lg;
  if (roundedFull) return 1000;
  return 0;
};

export const Container = styled.View`

  background-color: ${({ bg = 'transparent' }) => bg};
  elevation: ${(props) => getElevation(props)};
  border-radius: ${(props) => `${getRoundness(props)}px`};
  align-items: ${({ alignStart, alignCenter }) => {
    return getAlignItems(alignStart, alignCenter);
  }};
  justify-content: ${({
    justifyStart,
    justifyCenter,
    justifyBetween,
    justifyAround,
  }) => {
    return getJustifyItems(
      justifyStart,
      justifyCenter,
      justifyBetween,
      justifyAround,
    );
  }};

  shadow-opacity: ${(props) => (getElevation(props) !== 0 ? 0.4 : 0)};
  shadow-radius: ${(props) => getElevation(props)}px ;
  shadow-color: #000;
  shadow-offset: 0px ${(props) => getElevation(props)}px;

  ${({ ml }) => {
    return (
      !!ml &&
      css`
        margin-left: ${ml}px;
      `
    );
  }}
  ${({ mr }) => {
    return (
      !!mr &&
      css`
        margin-right: ${mr}px;
      `
    );
  }}

  ${({ mt }) => {
    return (
      !!mt &&
      css`
        margin-top: ${mt}px;
      `
    );
  }}
  
  ${({ mb }) => {
    return (
      !!mb &&
      css`
        margin-bottom: ${mb}px;
      `
    );
  }}

  ${({ flexGrow }) => {
    return (
      !!flexGrow &&
      css`
        flex-grow: ${flexGrow};
      `
    );
  }}

  ${({ row }) => {
    return (
      !!row &&
      css`
        flex-direction: row;
      `
    );
  }}

  ${({ height }) => {
    return (
      !!height &&
      css`
        height: ${height}px;
      `
    );
  }}

  ${({ width }) => {
    return (
      !!width &&
      css`
        width: ${width}px;
      `
    );
  }}

  ${({ self }) => {
    return (
      !!self &&
      css`
        align-self: ${self};
      `
    );
  }}

  ${({ minHeight }) => {
    return (
      !!minHeight &&
      css`
        min-height: ${minHeight}px;
      `
    );
  }}
  
  ${({ paddingHorizontal }) => {
    return (
      !!paddingHorizontal &&
      css`
        padding-horizontal: ${paddingHorizontal}px;
      `
    );
  }}

  ${({ paddingVertical }) => {
    return (
      !!paddingVertical &&
      css`
        padding-vertical: ${paddingVertical}px;
      `
    );
  }}
`;
