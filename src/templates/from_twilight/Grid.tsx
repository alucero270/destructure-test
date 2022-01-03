import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  columns?: Array<string | number | null>;
  centered?: string;
}

const Grid = styled.div(({ columns, centered }: Props) => {
  return {
    display: "grid",
    gridTemplateColumns: columns
      ? columns
          .map((value) => {
            if (typeof value === "string") {
              return value;
            } else if (typeof value === "number") {
              return value.toString();
            } else {
              return ".";
            }
          })
          .join(" ")
      : undefined,
    alignItems: centered ? "center" : undefined,
  };
});

export default Grid;
