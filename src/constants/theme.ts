import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  space: {
    padding: ['10px 0', '0 5px 0 5px', '20px 40px', '20px'],
    marginLeft: [5],
    marginRight: [5, 30, 50],
    marginBottom: [5],
    marginTop: [0, 5, 10, 20, 100],
  },
  fontSizes: {
    fontSize: [4, 8, 12, 16, 18, 20, 21, 22, 23, 24, 25, 28, 30, 32, 36, 40, 60],
  },
  sizes: {
    width: [11, 40, 60, 70, 100, 110, 200, 250, 700, 900],
    height: [40, 50, 60, 70, 100, 120, 150, 450, 230],
    minWidth: [100, 110],
    minHeight: [60],
    maxHeight: [600, 670],
    maxWidth: [450, 500, 700, 800],
  },
  colors: {
    color: ['#FFFFFF', '#000000', '#407088', '#272343', '#6855e0'],
    backgroundColor: ['#FFFFFF', '#272343', '#000000', '#685518', '#400082', '#717E8E'],
  },
  borders: {
    border: [
      '3px solid var(--scrollbarBG)',
      '1px solid rgba(104, 85, 224, 1)',
      'none transparent',
      '1px solid black',
    ],
    borderBottom: ['1px solid black'],
    borderRadius: [4, 5, 6, 10, 20, 40],
  },
  zIndices: {
    zIndex: [9999],
  },
};
