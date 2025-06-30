import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "./PageLayout";
import {Button} from "./Button";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    return (
        <PageLayout>
            <MainPageStyle>
                저는 박희찬입니다.
                <Button
                    isDisabled
                    onClick={() => alert("Hello")}
                >클릭 하면 답이 나올지어다</Button>
            </MainPageStyle>
        </PageLayout>
    );
};