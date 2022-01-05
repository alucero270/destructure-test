/** @jsx jsx */

import styled from "@emotion/styled"
import { Link } from "gatsby"

export const FooterNav = styled.div`
  background: #ba3232ff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
  width: auto;
  align-items: center;
  height: auto;
  margin: auto;
`

export const FooterContainer = styled.section`
  display: flex;
  /* 
  justify-content: space-between; 
  align-items: space-evenly;*/
  text-align: center;
`

export const FooterCredits = styled.p`
  align-items: center;
  margin-bottom: 24px;
  font-size: 12px;
`

export const FooterLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`
export const FooterSocialMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 10px;
`
export const FooterLinkMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 10px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw; */
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
