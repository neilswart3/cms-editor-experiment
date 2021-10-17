const remVal = 16

export const remToPx = (rem: number): number => rem * remVal

export const pxToRem = (px: number): number => px / remVal
