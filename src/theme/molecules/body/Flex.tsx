import { useTheme } from "@emotion/react";
import Box from "../../atoms/body/Box";
import { FlexProps } from "./BodyElementProps";


const Flex = (props: FlexProps) => {
  const theme = useTheme();
  return (
    <Box
      className={props.className}
      css={{
        alignItems: props.alignItems || "stretch",
        background: props.background || "#115980ff",
        display: props.display ? "flex" : "block",
        flex: props.flex || "0 1 auto",
        flexBasis: props.flexBasis || "auto",
        flexDirection: props.flexDirection || "row",
        flexGrow: props.flexGrow || 0,
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || "nowrap",
        height: props.height || "auto",
        justifyContent: props.justifyContent || "flex-start",
        margin: props.margin || 0,
        maxWidth: props.maxWidth || "100%",
        padding: props.padding || 0,
        width: props.width || "auto",
      }}
    >
      {props.children}
    </Box>
  );
};
export default Flex;

