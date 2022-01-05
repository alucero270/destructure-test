import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FlexProps } from "../body/BodyElementProps";
import Flex from "../body/Flex";

export const Nav = (props: FlexProps) => (
  <Flex
    css={{
      alignItems: "center",
      background: "#ba3232ff",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      height: "auto",
      justifyContent: "space-between",
      padding: "10px",
      width: "100%",
    }}
    {...props}
  />
);

export const NavContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-evenly;
  text-align: center;
`;

export const Bars = styled.button`
  display: none;
  flex-direction: column;
  margin: 25px;
  cursor: pointer;
  border-radius: 5px;

  span {
    height: 2px;
    width: 25px;
    background: black;
    margin: 4px;
    border-radius: 5px;
  }

  @media (max-width: 968px) {
    display: flex;
  }
`;
export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 1rem 2rem;
  text-align: center;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #15cdfc;
  }
`;

export interface NavMenuProps {
  open: Boolean;
}

export const NavMenu = styled.nav<NavMenuProps>`
  display: flex;
  justify-items: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 968px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0px")};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;
  /* Third Nav */
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: black;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: teal;
    color: #010606;
  }
`;
