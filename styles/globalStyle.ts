import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', 'Roboto', sans-serif;
  border: none;
  outline: 0;
}


body {
  background-color: ${({ theme }) => theme.colors.app.background};
}

/* width */
::-webkit-scrollbar {
  border-radius: 999px;
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0003;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.header_background}90;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.colors.background_high_emphasis}8b;
}


.react-toast-notifications__toast {
  color: ${({theme}) => theme.colors.text.medium_emphasis} !important;
  background-color: ${({theme}) => theme.colors.background_overlay} !important;
}

.react-toast-notifications__toast__icon-wrapper {
  background-color: ${({theme}) => theme.colors.icon.high_emphasis}90 !important;

}
`;