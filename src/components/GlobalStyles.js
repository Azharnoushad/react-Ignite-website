import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey
    }
}
body{
    font-family: 'Montserrat', sans-serif;
    width:100%
}
h2{
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    font-family: 'Abril Fatface', sans-serif;
    font-weight: lighter;
    color:#FF7676
}
h3{
    font-size:1.3rem;
    color:#333;
    padding:1.3rem
}
P{
    font-size:1.2rem;
    line-height: 200%;
    color:#696969
}
a{
    text-decoration: none;
    color:#333;
    
}
`;

export default GlobalStyles;