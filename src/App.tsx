import {GlobalStyle} from "./GlobalStyle";
import styled, {ThemeProvider} from "styled-components";
import {Theme} from "./theme";

const Box = styled.div`
  background-color: ${p => p.theme.color.Blue5};
`

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <Box>
                <h2>Styled Components</h2>
                <p>This is a simple example of styled-components with TypeScript.</p>
            </Box>
        </>
    )
}

export default App
