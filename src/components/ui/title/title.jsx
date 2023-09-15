import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};


function Title({ level, size, children, className }) {
  return <StyledTitle className={className} $size={size} as={`h${level}`}
  >{children}</StyledTitle>;
}

export default Title;