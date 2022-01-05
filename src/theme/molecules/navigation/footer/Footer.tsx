import { NavLink } from "../NavBarElements"
import {
  FooterContainer,
  FooterCredits,
  FooterNav,
  FooterSocialMenu,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterNav>
      <FooterContainer
        css={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignContent: "flex-end",
        }}
      >
        <FooterCredits>
          <p id="footer-info">
            Designed by{" "}
            <a href="https://www.iteamnm.com" title="Premium WordPress Themes">
              iTeam Consulting
            </a>
          </p>{" "}
        </FooterCredits>
      </FooterContainer>
      <FooterContainer>
        <FooterSocialMenu>
          <NavLink to="/facebook">
            <span>Facebook</span>s
          </NavLink>
          <NavLink to="/Twitter">
            <span>Twitter</span>
          </NavLink>
        </FooterSocialMenu>
      </FooterContainer>
    </FooterNav>
  )
}
export default Footer
