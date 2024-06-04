import { css, styled } from 'styled-components'; 
import { MyAnimation } from '../styles/animations/Animations';
import { myTheme } from '../styles/ThemeStyles';


type FontSizePropsType={
    color?: string
    fontSize?: string 
    radius?:string
    // primary?:boolean
    // outlined?:boolean
    btnType?: "primary" | "outlined" //different way to declare its type
    textType?:"textprimary"
    size?: string
}


export const StyledBtn= styled.button<FontSizePropsType>`//to make our props acceptable
    border: none;
    border-color: aliceblue;
    border-radius:${props=>props.radius || "5px"};
    /* background-color: rgb(255, 0, 50); */
    background-color: ${props=>props.color || "rgb(255, 0, 50)"};
    padding: 10px 20px;
    font-size:${props=>props.fontSize || "40px"};
    font-weight: bold;
    color:snow;

    &:hover{
    background-color: rebeccapurple;
    };
// the condition should be used in here
    ${props=>props.btnType==="outlined" && css<FontSizePropsType>`
        border: 2px solid  ${props=>props.color || "rgb(255, 0, 50)"}; 
        color: ${props=>props.color || "rgb(255, 0, 50)"};
        background-color: transparent;

        &:hover{
            border-color:rebeccapurple;
            color: rebeccapurple;
            background-color: transparent;
        }
    `}

    ${props=>props.btnType==="primary" && css<FontSizePropsType>`
        background-color:${props=>props.color || "rgb(255, 0, 50)"} ;
        color:${myTheme.color.grey.dark};
    `}

    ${props=>props.textType==="textprimary" && css<FontSizePropsType>`
        font-size:${props=>props.size||"45px"};
    `}















    /* last child doesn't address parent, it addresses child */
    /* &:last-child{
    background-color: #1fc640;
    &:hover{
    background-color: rebeccapurple;
    };
    }  */
`











// export const SuperBtn1= styled(StyledBtn)`///extends расширение
//     background-color: rgb(240, 240, 0);
//     color: rgb(42, 44, 45);
//     animation: ${MyAnimation} 2s ease-in-out;
// `