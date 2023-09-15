import React from "react";
import Logo from './../../ui/logo/logo';
import Nav from './../nav/nav';
import { StyledSection } from "./styles.js";

function Header() {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;