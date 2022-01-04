import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
