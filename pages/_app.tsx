import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";
import { StrictMode } from "react";
import { TasksProvider } from "../contexts/tasks-context";
import { ToastProvider } from "react-toast-notifications";

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <ToastProvider placement="bottom-right" >
          <TasksProvider>
            <Head>
              <title>What'sToDo</title>
            </Head>
            <Component {...pageProps} />
          </TasksProvider>
        </ToastProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
