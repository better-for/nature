import 'styled-components';
import { size, device, unit, color, typography, light, dark } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof color;
    unit: typeof unit;
    device: typeof device;
    size: typeof size;
    light: typeof light;
    dark: typeof dark;
    typography: typeof typography;
  }
}
