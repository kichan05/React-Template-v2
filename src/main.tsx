import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {Theme} from "./theme";
import {GlobalStyle} from "./GlobalStyle";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <App />
      </ThemeProvider>
  </StrictMode>,
)
