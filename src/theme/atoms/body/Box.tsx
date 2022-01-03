import { useTheme } from "@emotion/react";
import { BoxProps } from "../../molecules/body/BodyElementProps";
const theme = useTheme();
const Box = (props: BoxProps) => 
<div css={() => ({ ...props })} />;
export default Box;
