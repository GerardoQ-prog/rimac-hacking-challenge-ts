import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      input: string;
      sucess: string;
      text: {
        primary: string;
        secondary: string;
        default:string;
      };
    };
  }
}
