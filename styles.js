import { createGlobalStyle } from "styled-components";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${roboto.style.fontFamily}; 
  }
`;
