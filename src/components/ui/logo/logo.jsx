import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";

import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogoMainPage>
  )
    : (<StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
    );
}

export default Logo;