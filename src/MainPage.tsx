import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "./PageLayout";
import {Button} from "./Button";
import {Input} from "./Input";
import {LabelWrap} from "./LabelWrapProps";
import {Space} from "./Space";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    const [name, setName] = useState("")
    return (
        <PageLayout>
            <MainPageStyle>
                <Button
                    isDisabled
                    onClick={() => alert("Hello")}
                >클릭 하면 답이 나올지어다</Button>
                <Space h={20}/>
                <Input
                    value={name}
                    onChange={setName}
                />
                <Space v={20}/>
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