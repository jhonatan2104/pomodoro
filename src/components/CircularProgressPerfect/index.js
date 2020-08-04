/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions } from 'react-native';
import Svg, {
  Defs, LinearGradient, Stop, Circle 
} from 'react-native-svg';
import Animated from 'react-native-reanimated';

const { interpolate, multiply } = Animated;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const { width } = Dimensions.get('window');
const size = width - 100;
const strokeWidth = 40;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const cx = size / 2;
const cy = size / 2;

const CircularProgressPerfect = ({ progress }) => {
  const α = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI * 2],
  });
  const strokeDashoffset = multiply(α, radius);
  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="1" stopColor="#6D7CFF" />
          <Stop offset="0" stopColor="#4760B5" />
        </LinearGradient>
      </Defs>
      <Circle
        stroke="rgba(255, 255, 255, 0.2)"
        fill="none"
        {...{
          strokeWidth,
          cx,
          cy,
          r: radius,
        }}
      />
      <AnimatedCircle
        stroke="url(#grad)"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={`${circumference} ${circumference}`}
        {...{
          strokeWidth,
          strokeDashoffset,
          cx,
          cy,
          r: radius,
        }}
      />
    </Svg>
  );
};

export default CircularProgressPerfect;
