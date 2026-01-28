import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    const [name, setName] = useState("")
    return (
        <PageLayout>
            <MainPageStyle>
            </MainPageStyle>
        </PageLayout>
    );
};