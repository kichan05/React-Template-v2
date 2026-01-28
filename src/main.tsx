import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {Theme} from "./common/style/theme";
import {GlobalStyle} from "./common/style/GlobalStyle";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
)
