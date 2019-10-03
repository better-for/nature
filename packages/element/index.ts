import { color } from './Color';
import { typography } from './Typography';
import { unit } from './Unit';
import { device, size } from './Viewport';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export const theme = { color, typography, unit, device, size };
