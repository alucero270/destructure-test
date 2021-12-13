import Theme, {
  Aliases,
  Borders,
  Colors,
  Fonts,
  Multiples,
  Shadows,
  Sizes,
  Space,
} from "./Theme";

const aliases: Record<Aliases, string> = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingX",
  py: "paddingY",
};

const space: Record<Space, string | number> = {
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
};
const sizes: Record<Sizes, number | string> = {
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  Box: 1080,
  navbarHeight: 50,
  size: "sizes",
};

const multiples: Record<Multiples, string[]> = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"],
};

const colors: Record<Colors, string | undefined> = {
  primary: "#0051FF",
  secondary: "#00A3FF",
  accent: "#FF5C00",
  accent_1: "#FF9900",
  text: "#E5E5E5",
  background: "#171D2B",
  navbar: "#050B19",
  link: "#B1B8C9",
  link_active: "#ECEFF4",
  heading: "#94ABDC",
  grey: "#AAB2C5",
  placeholder: "#393F4F",
  color: "",
  backgroundColor: "",
  borderColor: "",
  caretColor: "",
  columnRuleColor: "",
  borderTopColor: "",
  borderBottomColor: "",
  borderLeftColor: "",
  borderRightColor: "",
  outlineColor: "",

  fill: "",
  stroke: "",
};
const shadows: Record<Shadows, number | string | undefined> = {
  boxShadow: "shadows",
  textShadow: "shadows",
};
const fonts: Record<Fonts, string> = {
  body: `"Open Sans", sans-serif`,
  heading: `"Work Sans", sans-serif`,
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
};
const borders: Record<Borders, undefined | string> = {
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightStyle: "borderStyles",
};
const DefaultTheme: Theme = {
  aliases,
  multiples,
  sizes,
  colors,
  shadows,
  borders,
  fonts,
  padding: {
    default: "2rem",
    dense: ".75rem",
  },
  space,

  styles: {
    a: {
      color: colors.link,
      textDecoration: "none",
      fontWeight: "bold",
      fontFamily: fonts.body,
      ":hover": {
        color: colors.link_active,
      },
      ":active": {
        color: colors.link_active,
      },
    },
  },
  text: {
    copy: {
      color: "white",
      fontFamily: fonts.body,
    },
    heading: {
      fontFamily: fonts.heading,
      fontWeight: 300,
      color: colors.heading,
    },
    accent: {
      color: "#FEF0E8",
    },
    subheading: {
      color: "white",
    },
    metric: {
      fontWeight: 700,
      color: "white",
      fontSize: 36,
    },
  },
  forms: {
    input: {
      border: "none",
      padding: "16px 18px",
      borderBottom: `2px solid ${colors.grey}`,
      background: colors.background,
      borderRadius: "1px",
      outline: "none",
      "&:active": {
        outline: "none",
        borderColor: colors.primary,
      },
      "&:focus": {
        outline: "none",
        borderColor: colors.primary,
      },
    },
    "jumbo-input": {
      variant: "forms.input",
      fontSize: 18,
    },
  },
  buttons: {
    primary: {
      border: "none",
      cursor: "pointer",
      background: colors.primary,
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "body",
      textDecoration: "none",
      color: "white",
      borderRadius: 9999,
      padding: "10px 24px",
      display: "inline-block",
      pointerEvents: "initial",
      transition: "all ease-in-out .12s",
      transform: "translateY(0)",
      marginTop: "3px",
      ":hover": {
        transform: "translateY(-1px)",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
      },
      ":active": {
        transform: "translateY(0)",
        boxShadow: "none !important",
      },
    },
    jumbo: {
      padding: "12px 50px",
      fontSize: 18,
      background: `linear-gradient(90deg, ${colors.primary} -0.08%, ${colors.secondary} 100.08%)`,
    },
    outline: {
      background: "transparent",
      border: `2px solid ${colors.primary}`,
      color: colors.primary,
      ":hover": {
        background: colors.primary,
        color: "white",
        transform: "translateY(-1px)",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
      },
    },
    accent: {
      background: colors.accent,
    },
  },
};

export default DefaultTheme;
