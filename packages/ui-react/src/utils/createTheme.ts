'use client';

import {createBreakpoints} from './createBreakpoints.js';
import {createColors} from './createColors.js';
import {createShadows} from './createShadows.js';

const breakpoint = createBreakpoints();
const color = createColors();
const shadow = createShadows();
const spacing = (key: number) => `${key}rem`;

export const createTheme = () => ({
    breakpoint,
    color,
    shadow,
    spacing
} as const);
