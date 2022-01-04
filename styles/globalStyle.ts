import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    font-family: 'Poppins', 'Roboto', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.colors.app.background};
}
`;