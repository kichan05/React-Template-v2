import {GlobalStyle} from "./GlobalStyle";
import styled, {ThemeProvider} from "styled-components";
import {Theme} from "./theme";

const Box = styled.div`
  background-color: ${p => p.theme.color.Blue5};
`

const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
`

function App() {
    return (
        <>
            <Box>
                <Title>저는 박희찬입니다람쥐</Title>
            </Box>
        </>
    )
}

export default App
