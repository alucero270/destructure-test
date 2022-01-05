import { useTheme } from "@emotion/react";
import Box from "../../atoms/body/Box";
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
        alignSelf: props.alignSelf || "stretch",
        background: props.background || "#115980ff",
        display: props.display ? "grid" : "inline-grid" || "subgrid",
        gridAutoFlow: props.gridAutoFlow || "row",
        gridColumn:
          props.gridColumn || "grid-column-start: 1; grid-column-end: 3;",
        gridGap: props.gridGap || "grid-gap",
        gridRow: props.gridRow || "grid-row-start: 1; grid-row-end: 3;",
        gridRowColumn:
          props.gridRowColumn ||
          "grid-row: 1 / span 2; grid-column: 1 / span 2;",
        gridTemplate: props.gridTemplate || "grid-template-columns",
        height: props.height || "auto",
        justifyContent: props.justifyContent || "start",
        justifyItems: props.justifyItems || "start",
        justifySelf: props.justifySelf || "stretch;",
        margin: props.margin || "0",
        maxWidth: props.maxWidth || "none",
        padding: props.padding || "0",
        width: props.width || "auto",
      }}
    >
      {props.children}
    </Box>
  );
};
export default Grid;
