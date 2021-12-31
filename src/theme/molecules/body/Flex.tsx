import { useTheme } from "@emotion/react";
import { Box } from "../../atoms/body/Box";
import { FlexProps } from "./BodyElementProps";

const Flex = (props: FlexProps) => {
  const theme = useTheme();
  return (
    <Box
      className={props.className}
      css={{
        display: props.container ? "flex" : "block",
        justifyContent: props.justifyContent || "flex-start",
        flexDirection: props.flexDirection || "row",
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || "auto",
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || "nowrap",
        flex: props.flex || "0 1 auto",
        alignItems: props.alignItems || "stretch",
        margin: props.margin || "0",
        padding: props.padding || "0",
        width: props.width || "auto",
        height: props.height || "auto",
        maxWidth: props.maxWidth || "none",
        background: "#115980ff",
      }}
    >
      {props.children}
    </Box>
  );
};
export default Flex;
