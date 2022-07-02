import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      rating: string,
      stroke1: string,
      stroke2: string,
      primary: string,
      primaryHover: string,
      text3: string,
      textLink: string,
      textDanger: string,
      textBlack: string,
      bgWhite: string,
      textWhite: string,
    }
  }
}
