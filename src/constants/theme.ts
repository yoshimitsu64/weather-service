import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  space: {
    padding: ['10px 0', '0 5px 0 5px', '20px 40px', '20px'],
    marginLeft: [5],
    marginRight: [5, 30, 50],
    marginBottom: [5, 30],
    marginTop: [0, 5, 10, 20, 100],
  },
  fontSizes: {
    fontSize: [4, 8, 12, 16, 18, 20, 21, 22, 23, 24, 25, 28, 30, 32, 36, 40, 60],
  },
  sizes: {
    width: [11, 40, 60, 70, 100, 110, 200, 250, 700, 900, 350],
    height: [40, 50, 60, 70, 100, 120, 150, 450, 230],
    minWidth: [100, 110],
    minHeight: [60],
    maxHeight: [600, 670],
    maxWidth: [450, 500, 700, 800],
  },
  colors: {
    rgbaColor: [
      'rgb(255, 255, 255)',
      'rgb(64, 112, 136)',
      'rgb(39, 35, 67)',
      'rgb(104, 85, 224)',
      'rgb(104, 85, 24)',
      'rgb(64, 0, 130)',
      'rgb(113, 126, 142)',
      'rgb(207, 216, 220)',
      'rgb(144, 164, 174)',
      'rgb(0,0,0)',
      'rgba(0,0,0,0.7)',
      'rgba(255, 255, 255,0.9)',
    ],
    gradient: ['linear-gradient(to right, rgb(236, 110, 173), rgb(52, 148, 230))'],
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
  fonts: {
    fontWeight: [600],
  },
};
