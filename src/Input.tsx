import {ComponentPropsWithRef, FC} from "react";
import styled from "styled-components";

export type InputProps = {
    value: string;
    onChange: (value: string) => void;
} & ComponentPropsWithRef<'input'>

const InputStyle = styled.input`
  font-size: 16px;

  box-shadow: 0 0 0 2px ${p => p.theme.color.Gray3};
  border: none;
   //border: 2px solid ${p => p.theme.color.Gray3};
  border-radius: 5px;
  outline: none;
  padding: 10px;
`

export const Input: FC<InputProps> = ({value, onChange, ...rest}) => {
    return (
        <InputStyle
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...rest}
        >

        </InputStyle>
    );
};