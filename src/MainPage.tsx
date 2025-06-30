import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "./PageLayout";
import {Button} from "./Button";
import {Input} from "./Input";
import {LabelWrap} from "./LabelWrapProps";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    const [name, setName] = useState("")
    return (
        <PageLayout>
            <MainPageStyle>
                저는 박희찬입니다.
                <Button
                    isDisabled
                    onClick={() => alert("Hello")}
                >클릭 하면 답이 나올지어다</Button>
                <Input
                    value={name}
                    onChange={setName}
                />
                <LabelWrap label={"이름"}>
                    <Input
                        value={name}
                        onChange={setName}
                    />
                </LabelWrap>
                {name}
            </MainPageStyle>
        </PageLayout>
    );
};