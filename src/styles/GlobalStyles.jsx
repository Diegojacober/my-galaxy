import { createGlobalStyle } from "styled-components";
import { primaryColor } from '../config/colors';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${primaryColor};
    color: #FFF;
    width: 100%;
    font-family: 'Inter', sans-serif;
}
`;
