import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    font-family: 'Inter', sans-serif;
    padding:0 ;
    margin:0 ;
    box-sizing: border-box;
  }
`;

export { GlobalStyle };
