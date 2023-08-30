import { styled } from "styled-components";
import { opacity } from "../../config/colors";

export const Title = styled.h2`
    & {
        font-size: 28px;
        text-align: center;
        font-weight: 400;
    }
`


export const Content = styled.div`
    & {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
`;

export const Input = styled.input`
   & {
    background-color: ${opacity};
    border: none;
    border-radius: 4px;
    height: 35px;
    width: 305px;
    padding: 18px 20px;
    font-size: 25px;
    color: #FFF;
   }

   &:focus {
    outline: none;
   }

`
