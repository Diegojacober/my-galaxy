import { styled } from "styled-components";
import { infoColorLight, infoColorDark, opacity } from "../../config/colors";

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

export const Button = styled.a`
    background-color: ${infoColorLight};
    color: #FFF;
    text-decoration: none;
    width: 220px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 500;
    font-size: 20px;
    padding:  20px 0px;
`

export const ButtonInactive = styled.a`
    background-color: ${infoColorLight};
    color: #FFF;
    opacity: 0.8;
    text-decoration: none;
    width: 220px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 500;
    font-size: 20px;
    padding:  20px 0px;
`


export const Main = styled.section`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

export const ImageContent = styled.article`
    & {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & img {
        border-radius: 4px;
        width: 450px;
        height: 400px;
        background-color: #b1b0b0;
    }
`;


export const BtnDownload = styled.a`
    & {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 10px 25px;
        border-radius: 4px;
        background-color: ${infoColorDark};
        cursor: pointer;
        user-select: none;
    }
    
`;


export const Description = styled.article`
    & {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding: 10px;
        padding-top: 30px;
        gap: 25px;
    }

    & h4{
        font-size: 30px;
    }

    & p {
        text-align: center;
        font-size: 20px;
    }
`;


export const Loader = styled.span`

    & {
        margin-top: 80px;
        transform: rotateZ(45deg);
        perspective: 1000px;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        color: #FFF;
      }
      &:before,
      &:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: 1s spin linear infinite;
        }
        &:after {
          color: ${infoColorLight};
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotateZ(360deg);
        }
      }

      @keyframes rotateccw {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      @keyframes spin {
        0%,
        100% {
          box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
          box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
          box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
          box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
          box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
          box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
          box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
          box-shadow: .2em -.2em 0 0 currentcolor;
        }
      }
   

`;
