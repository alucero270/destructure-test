
import Nav from "./Nav"
import { css } from "@emotion/react"
import Navbar from "./NavBar"
import Grid from "../../elements/Grid"
const Header = () => {
  return (
    <Grid css={css``} >
      <header
        id="main-header"
        data-height-onload="80"
        data-height-loaded="true"
        data-fixed-height-onload="80"
        css={css`
          top: 0px;
        `}
        className=""
      >
        <Navbar />
        <div className="container clearfix et_menu_container">
          <div className="title_container">
            <h1>
              <a
                href="https://www.elegantthemes.com/layouts/health-fitness/eye-doctor-landing-page"
                title="Divi Builder Layout Pack"
              >
                Eye Doctor Landing{" "}
              </a>
            </h1>
          </div>
        </div>
        <SearchForm />
      </header>
    </Grid>
  )
}
export default Header
