import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";
import { StrictMode } from "react";
import { TasksProvider } from "../contexts/tasks-context";

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <TasksProvider>
          <Head>
            <title>To-Do</title>
          </Head>
          <Component {...pageProps} />
        </TasksProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
