import { ReactNode } from "react";

export interface BoxProps {
  as?: string;
  className?: string;
  children?: ReactNode;
  container?: boolean;
  centered?: boolean;
  dense?: string;
  display?: boolean;
  margin?: number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marginX?: string | number;
  marginY?: string | number;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  paddingX?: string | number;
  paddingY?: string | number;
  width?: string | number;
}
export interface GridProps {
  background?: string;
  className?: string;
  children?: ReactNode;
  container?: boolean;
  /****** Container Props ********/
  alignContent?:
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch";

  alignItems?: "start" | "end" | "center" | "stretch";
  display?: "grid" | "inline-grid" | "subgrid";
  gridAutoFlow?: "row" | "column" | "dense";
  gridGap?: "grid-gap" | "grid-column-gap" | "grid-row-gap";
  gridTemplate?: "grid-template-columns" | "grid-template-rows";
  justifyContent?:
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch";
  /****** Child Props ********/
  alignSelf?: string;
  gridColumn?: number | string;
  gridRow?: number | string;
  gridRowColumn?: number | string;
  justifyItems?: "start" | "end" | "center" | "stretch";
  justifySelf?: string;
  /****** Common Layout Props ********/
  height?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  padding?: string;
  width?: string;
}

export interface FlexProps {
  background?: string;
  children?: ReactNode;
  className?: string;
  container?: boolean;
  display?: boolean;
  /****** Container Props ********/
  alignContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "stretch";
  alignItems?:
    | "baseline"
    | "center"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "stretch";
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";

  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "space-around"
    | "space-between"
    | "space-evenly";

  /****** Child Props ********/
  alignSelf?: string;
  flex?: string | number;
  flexBasis?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  order?: number;
  /****** Common Layout Props ********/
  height?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  padding?: string;
  width?: string;
}
