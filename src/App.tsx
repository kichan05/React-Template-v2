import styled from "styled-components";
import {MainPage} from "./MainPage";

export const PageLayout = styled.div`
  padding: 12px;
  margin: 0 auto;
`


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
            <MainPage/>
        </>
    )
}

export default App
