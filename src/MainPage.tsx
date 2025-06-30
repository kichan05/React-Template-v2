import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "./PageLayout";

export type MainPageProps = {

}

const MainPageStyle = styled.div`
  background-color: #f00;
`

export const MainPage: FC<MainPageProps> = () => {
    return (
        <PageLayout>
            <MainPageStyle>
                저는 박희찬입니다.
            </MainPageStyle>
        </PageLayout>
    );
};