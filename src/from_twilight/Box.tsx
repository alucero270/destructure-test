/** @jsx jsx */
import { useTheme } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import styled, { StyledComponent } from "@emotion/styled";
import { HTMLAttributes } from "react";

interface Props extends Element {
  centered?: boolean;
  dense?: boolean;
}

export const Box = styled.div(({ centered, dense }: Props) => {
  const theme = useTheme();
  return {
    display: "flex",
    maxWidth: "",
    width:"",
    border:"",
    height:"",

    margin: "right",
    textAlign: centered ? "center" : undefined,
    padding: dense ? theme.padding.dense : theme.padding.default,
  };
});

export default Box;
