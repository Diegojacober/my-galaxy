import { createGlobalStyle, styled } from "styled-components";
import { primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${primaryDarkColor};
    color: #FFF;
    width: 100%;
    font-family: 'Inter', sans-serif;
}
`;

export const Container = styled.main`
    & {
        width: 85%;
        border: 1px solid red;
        padding: 10px;
        margin: 0 auto;
    }
`
