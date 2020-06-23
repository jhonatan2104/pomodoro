/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { Dimensions } from 'react-native';
import SVG, {
 Defs, LinearGradient, Stop, Path
} from 'react-native-svg';
import Animated from 'react-native-reanimated';

const { interpolate, multiply } = Animated;
const { width } = Dimensions.get('window');
const size = width - 100;
const strokeWidth = 20;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const { PI, cos, sin } = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI + PI * 0.4;
const startAngle = PI + PI * 0.2;
const endAngle = 2 * PI - PI * 0.2;
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y
const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

const CircularProgress = ({ progress }) => {
  const circumference = r * A;
  const α = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, A],
  });
  const strokeDashoffset = multiply(α, r);
  return (
    <SVG width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="1" stopColor="#6D7CFF" />
          <Stop offset="0" stopColor="#4760B5" />
        </LinearGradient>
      </Defs>
      {/* <Path
        stroke="#fff"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeWidth }}
      /> */}
      <AnimatedPath
        stroke="url(#grad)"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeDashoffset, strokeWidth }}
      />
    </SVG>
  );
};

export default CircularProgress;
