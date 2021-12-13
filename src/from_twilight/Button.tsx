import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { ButtonVariants } from "../theme/Theme";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
}

const Button = styled.button((props: Props) => {
  const theme = useTheme();
  return theme.buttons=[props.variant];
});

export default Button;
