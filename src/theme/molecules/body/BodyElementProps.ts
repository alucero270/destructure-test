export interface GridProps {
  className: string | undefined;
  children?: any;
  container?: boolean;
  /****** Container Props ********/
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignItems?: "start" | "end" | "center" | "stretch";
  display?: "grid" | "inline-grid" | "subgrid";
  gridAutoFlow?: "row" | "column" | "dense";
  gridGap?: "grid-gap" | "grid-column-gap" | "grid-row-gap";
  gridTemplate?: "grid-template-columns" | "grid-template-rows";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly";
  justifyItems?: "start" | "end" | "center" | "stretch";
  /****** Child Props ********/
  gridColumn?: number;
  gridRow?: number;
  gridRowColumn?: number;
  justifySelf?: string;
  alignSelf?: string;
  /****** Common Layout Props ********/
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export interface FlexProps {
  children?: any;
  className?: string;
  container?: boolean;
  /****** Container Props ********/
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  alignContent?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  /****** Child Props ********/
  alignSelf?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string | "auto";
  order?: number;
  flex?: string | number;
  /****** Common Layout Props ********/
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}
