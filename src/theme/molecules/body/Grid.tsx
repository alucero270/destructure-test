import { useTheme } from "@emotion/react";
import { Box } from "../../atoms/body/Box";
import { GridProps } from "./BodyElementProps";

// interface Props extends HTMLAttributes<HTMLDivElement> {
//   columns?: Array<string | number | null>;
//   centered?: string;
// }

// const Grid = styled.div(({ columns, centered }: Props) => {
//   return {
//     display: "grid",
//     gridTemplateColumns: columns
//       ? columns
//           .map((value) => {
//             if (typeof value === "string") {
//               return value;
//             } else if (typeof value === "number") {
//               return value.toString();
//             } else {
//               return ".";
//             }
//           })
//           .join(" ")
//       : undefined,
//     alignItems: centered ? "center" : undefined,
//   };
// });

// export default Grid;

const Grid = (props: GridProps) => {
  const theme = useTheme();
  return (
    <Box
      className={props.className}
      css={{
        alignContent: props.alignContent || "stretch",
        alignItems: props.alignItems || "stretch",
        display: props.container ? "grid" : "inline-grid" || "subgrid",
        gridAutoFlow: props.gridAutoFlow || "row",
        gridGap: props.gridGap || "grid-gap",
        gridTemplate: props.gridTemplate || "grid-template-columns",
        justifyContent: props.justifyContent || "start",
        justifyItems: props.justifyItems ||"start",
        gridColumn: props.gridColumn || "grid-column-start: 1; grid-column-end: 3;",
        gridRow: props.gridRow || "grid-row-start: 1; grid-row-end: 3;",
        gridRowColumn: props.gridRowColumn || "grid-row: 1 / span 2; grid-column: 1 / span 2;",
        justifySelf: props.justifySelf || "stretch;",
        alignSelf: props.alignSelf || "stretch",
        margin: props.margin || "0",
        padding: props.padding || "0",
        width: props.width || "auto",
        height: props.height || "auto",
        maxWidth: props.maxWidth || "none",
        background: "#115980ff"
      }}
    >
      {props.children}
    </Box>
  );
};
export default Grid;
