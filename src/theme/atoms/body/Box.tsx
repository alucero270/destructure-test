import { BoxProps, FlexProps, GridProps } from "../../molecules/body/BodyElementProps";

const Box = (props:BoxProps|GridProps|FlexProps) => (
    <div {...props}/>
)

export default Box;
