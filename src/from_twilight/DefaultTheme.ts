import Theme, { Colors, Fonts } from "./Theme";
const colors: Record<Colors, string> = {
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
};

const fonts: Record<Fonts, string> = {
  body: `"Open Sans", sans-serif`,
  heading: `"Work Sans", sans-serif`,
};
const DefaultTheme: Theme = {
  colors,
  fonts,
  sizes: {
    Box: 1080,
    navbarHeight: 50,
  },
  padding: {
    default: "2rem",
    dense: ".75rem",
  },
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
