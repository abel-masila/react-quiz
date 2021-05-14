import styled, { createGlobalStyle } from "styled-components";
import BGIMAGE from "./images/nattu-adnan-unsplash.jpeg";

export const GlobalStyle = createGlobalStyle`
html {
    height:100%;
}
body{
background-image:url(${BGIMAGE});
background-size:cover;
marging:0;
padding:0,20px;
display:flex;
justify-content:center;
}
*{
    box-sizing:border-box;
    font-family:'Catamaran', san-serif;
}
`;
