import { css, Global, useTheme } from "@emotion/react"
import Flex from "../molecules/body/Flex"
import Footer from "../molecules/navigation/footer/Footer";
import Navbar from "../molecules/navigation/NavBar"
import SEO from "../seo";
function DefaultLayout() {
  const theme = useTheme();
  return (
    <Flex>
      {/* <div
        id="page-container"
        css={css`minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          margin: 0,`}
        className="et-animated-content"
      > */}
      <Global
        styles={{
          body: {
            margin: 0,
            fontFamily: theme.fonts.body,
            fontSize: 14,
            backgroundColor: "white",
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
      <SEO />
      <Navbar />
      <main>
        {/* <MainContent /> */}
      </main>
      <Footer />
      {/* </div> */}
    </Flex>
  );
}
export default DefaultLayout;