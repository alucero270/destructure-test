import { useTheme } from "@emotion/react";
import { HTMLAttributes } from "react";
import { PropertyName } from "typescript";
import {Box} from "./Box";
  /*** FLOW TYPES ***/

export type FlexProps = {
  children?: any,
  className?: string,
  container?: boolean,
  /****** Container Props ********/
  flexDirection?: 'row' | 'column',
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit',
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit',
  /****** Child Props ********/
  flexGrow?: number,
  flexShrink?: number,
  flexBasis?: number,
  flex?: string,
  /****** Common Layout Props ********/
  padding?: string,
  margin?: string,
  width?: string,
  height?: string,
  maxWidth?: string,
  maxHeight?: string
}
/*** TYPESCRIPT TYPES ***/

interface FlexProps {
  children?: any
  className?: string
  container?: boolean
  /****** Container Props ********/
  flexDirection?: "row" | "column"
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit"
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse"
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit"
  /****** Child Props ********/
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number
  flex?: string
  /****** Common Layout Props ********/
  padding?: string
  margin?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
}

const Flex = ((props: FlexProps)=>{
  const theme=useTheme();
  <Box
    className={props.className}
    style={{
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
    }}
  >
    {props.children}
  </Box> 
});
export default Flex;
//Flex.displayName = "Flex";
