import { createGlobalStyle } from "styled-components";
import { Roboto_Flex } from "next/font/google";
import colors from "./styles/colors";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${roboto.style.fontFamily}; 
    margin: 0;
  }

h1{
  font-size: x-large;
  font-style: italic;
  font-weight: 900;
  margin: 10px 0;
  color: ${colors.typography[50]};
}

`;
