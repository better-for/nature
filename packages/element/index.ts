import { color } from './Color';
import { typography } from './Typography';
import { unit } from './Unit';
import { device, size } from './Viewport';

export { color } from './Color';
export { typography } from './Typography';
export { leaf, glass } from './Unit';
export { device, size } from './Viewport';
export { unit } from './Unit';

export const light = {
  bg: {
    primary: '#eff0f5',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff'
  }
};

export const dark = {
  bg: {
    primary: '#050505',
    secondary: '#222222',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)'
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505'
  }
};

export const theme = {
  color,
  typography,
  unit,
  device,
  size,
  light,
  dark
};

export type Theme = typeof theme;
