import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";
import { StrictMode } from "react";


export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Head>
          <title>To-Do</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  );
}
