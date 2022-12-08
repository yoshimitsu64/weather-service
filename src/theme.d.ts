import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      fontSize: Array<number>;
    };
    space: {
      padding: Array<string>;
      marginTop: Array<number>;
      marginRight: Array<number>;
      marginLeft: Array<number>;
      marginBottom:Array<number>
    };
    sizes: {
      width: Array<number>;
      minWidth: Array<number>;
      minHeight: Array<number>;
      height: Array<number>;
      maxWidth: Array<number>;
      maxHeight: Array<number>;
    };
    colors: {
      backgroundColor: Array<string>;
      color: Array<string>;
    };
    borders: {
      borderRadius: Array<number>;
      border: Array<string>;
      borderBottom: Array<string>;
    };
    zIndices: {
      zIndex: Array<number>;
    };
  }
}
