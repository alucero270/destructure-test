import { Global, useTheme } from "@emotion/react";
import Nav from "./navigation/Nav";
import NavLink from "./navigation/NavLink";
import NavCollapse from "./navigation/NavCollapse";
import SEO from "../seo/SEO";
import Footer from "../layouts/footer/FooterLink"
import NavLinkList from "./navigation/NavLinkList";
import { MDXProviderComponents } from "@mdx-js/react";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  pageContext?: MDXProviderComponents;
}

function DefaultLayout({
  children,
  pageContext,
}: Props) {
  const theme = useTheme();

  return (
    <div
      css={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        margin: 0,
      }}
    >
      <Global
        styles={{
          body: {
            margin: 0,
            fontFamily: theme.fonts.body,
            backgroundColor: theme.colors.background,
          },
          "*": {
            boxSizing: "border-box",
            ":before": {
              boxSizing: "border-box",
            },
            ":after": {
              boxSizing: "border-box",
            },
          },
        }}
      />

      <SEO {...pageContext} />

      <Nav height={theme.sizes.navbarHeight}>
        <NavLink to="/">
          <img
            height={50 * 0.7}
            alt="iTEAM Consulting"
            src="/assets/logo-white.png"
          />
        </NavLink>
        <NavCollapse>
          <NavLinkList header />
        </NavCollapse>
      </Nav>

      <main
        css={{
          flex: 1,
          paddingTop: theme.sizes.navbarHeight,
        }}
      >
        {children}
      </main>

      <Footer children={Element} layout={"horizontal"} />
    </div>
  );
}
export default DefaultLayout;
