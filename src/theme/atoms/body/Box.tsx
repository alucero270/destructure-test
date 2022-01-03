import { BoxProps } from "../../molecules/body/BodyElementProps";
const Box = (props: BoxProps) => 
<div css={() => ({ ...props })} />;
export default Box;
