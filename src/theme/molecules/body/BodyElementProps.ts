export interface BoxProps {
  centered?: boolean;
  dense?: boolean;
  display?: string;
  margin?: string | number;
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
  /****** Child Props ********/
  justifyItems?: "start" | "end" | "center" | "stretch";
  alignSelf?: string;
  gridColumn?: number|string;
  gridRow?: number|string;
  gridRowColumn?: number|string;
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
