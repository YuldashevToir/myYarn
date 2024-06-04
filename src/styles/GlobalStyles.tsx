import { createGlobalStyle } from "styled-components";
import { myTheme } from "./ThemeStyles";
export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
display: flex;
justify-content: center;
align-items: center;
background-color: ${myTheme.color.grey.dark};
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`