import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.blackAlpha[900]}; 
  }
  
  * {
    font-family: 'Inter', sans-serif;
    padding:0 ;
    margin:0 ;
    box-sizing: border-box;
  }
`;

export { GlobalStyle };
