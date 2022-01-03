import styled from "@emotion/styled"
import { Link } from "gatsby"
import { wrap } from "module";

export const Nav = styled.nav`
  background: #ba3232ff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  height: auto;`
export const NavContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-evenly;
  text-align: center;
`

export const Bars = styled.div`
  display: none;
  flex-direction: column;
  margin: 25px;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
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
`
export const NavMenu = styled.div`
  display: flex;
  justify-items: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;
  /* Third Nav */
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

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
`
