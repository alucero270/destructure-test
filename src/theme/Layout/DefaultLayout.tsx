import { css, Global, useTheme } from "@emotion/react"
import Navbar from "../molecules/navigation/NavBar"

function DefaultLayout() {
  const theme = useTheme()
  return (
    <body>
      <div
        id="page-container"
        css={css`minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          margin: 0,`}
        className="et-animated-content"
      >
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
        {/* <SEO /> */}
        <Navbar />
        <div> Place main here</div>
        <main>
        
        </main>
        {/* <Footer /> */}
      </div>
    </body>
  )
}
export default DefaultLayout
