import styled from "styled-components";
import { Section } from "../../styled";
import galleryBG from "../../../assets/gallery-bg.svg"
import galleryLeft from "../../../assets/gallery-left.svg"
import galleryRight from "../../../assets/gallery-right.svg"
import Title from "../../ui/title/title";

export const StyledSection = styled(Section)`
  display: block;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${galleryBG});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 113px;
    height: 114px;
    content: "";
    background-image: url(${galleryLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    top: 77px;
    right: 0;
    width: 225px;
    height: 222px;
    content: "";
    background-image: url(${galleryRight});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`;