import * as constants from './constants';
import { trimNumbers, devideNumber, definePageIndexes, convertTime, getWidth } from './functions';
import themes from './themes';
import { useTabSwitch } from './hooks';
const breakPoints = {
  xs: 560,
  sm: 780,
  md: 960,
  lg: 1100,
};
export { constants, trimNumbers, devideNumber, definePageIndexes, convertTime, useTabSwitch, themes, getWidth, breakPoints };
