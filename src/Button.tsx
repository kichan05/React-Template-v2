import {FC, ReactNode} from "react";
import styled, {css} from "styled-components";
import {darken, lighten} from 'polished';

export type ButtonProps = {
    children: ReactNode;
    color?: string;
    background?: string;
    onClick: () => void;
}

const Color = css`
  ${p => {
    let {
      background = p.theme.color.HeechanBlue,
      color = p.theme.color.Gray0
    } = p;

    if (Object.hasOwn(p.theme.color, background)) {
      background = p.theme.color[background];
    }

    if (Object.hasOwn(p.theme.color, color)) {
      color = p.theme.color[color];
    }


    return css`
      color: ${color};
      background-color: ${background};

      &:hover {
        background-color: ${darken(0.02, background)};
      }

      &:active {
        background-color: ${lighten(0.02, background)};
      }
    `
  }}
`

const ButtonStyle = styled.button<ButtonProps>`
  ${Color};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`

export const Button: FC<ButtonProps>
    = ({children, onClick, ...rest}) => {

    return (
        <ButtonStyle onClick={() => onClick()} {...rest}>
            {children}
        </ButtonStyle>
    );
};