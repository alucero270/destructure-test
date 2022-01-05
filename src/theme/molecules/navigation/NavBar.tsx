import { useState } from "react"
import { Nav, NavLink, Bars, NavMenu, NavContainer } from "./NavBarElements"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLink to="/">
          <h1>New Mexico Podiatry</h1>
        </NavLink>
      </NavContainer>
      <Bars onClick={(_e) => setOpen((prev) => !prev)}>
        <span />
        <span />
        <span />
      </Bars>

      <NavMenu open={open}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
