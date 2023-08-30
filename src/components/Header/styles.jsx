import { styled } from "styled-components";
import { primaryColor } from "../../config/colors";

export const Menu = styled.header`
    &{
        user-select: none;
        width: 100%;
        background-color: ${primaryColor};
        height: 95px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        padding: 10px;
        margin-bottom: 60px;
    }

    & img {
        width: 90px;
        height: 90px;
    }
`

export const Title = styled.h1`
    & {
        width: 100%;
        padding: 0 5px;
        text-align: center;
        text-transform: uppercase;
        font-size: 45px;
        letter-spacing: 8px;
    }
`