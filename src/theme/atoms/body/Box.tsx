/** @jsx jsx */
import { useTheme } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";

const isObjectEmpty = (obj: {}) => {
  return Object.keys(obj).length === 0;
};

type BoxProps = {
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingX?: string | number;
  paddingY?: string | number;
  margin?: string | number,
  marginTop?: string | number,
  marginRight?: string | number,
  marginBottom?: string | number,
  marginLeft?: string | number,
  marginX?: string | number,
  marginY?: string | number,
  width?: string | number;
  display?: string | number;
  centered?: boolean;
  dense?: boolean;
};

const Box = styled.div((props: BoxProps) => {
  const theme = useTheme();
return {
    padding:theme.space,
    paddingTop:theme.space,
    paddingRight:theme.space,
    paddingBottom:theme.space,
    paddingLeft:theme.space,
    margin:theme.space,
    marginTop:theme.space,
    marginRight:theme.space,
    marginBottom:theme.space,
    marginLeft:theme.space,
    width:theme.space,
    display:theme.space,
    fontFamily: "fonts",
  };
};

export default Box