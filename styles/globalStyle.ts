import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', 'Roboto', sans-serif;
}

input, textarea, button {
  border: none;
  outline: 0;
}


body {
  background-color: ${({ theme }) => theme.colors.app.background};
}
`;