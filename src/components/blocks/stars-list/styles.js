import styled from "styled-components";
import { Section, Ul, Li } from "../../styled";
import starsImage from "../../../assets/stars-list-bg.svg"
import starsLeft from "../../../assets/stars-list-before.svg"
import starsRight from "../../../assets/stars-list-after.svg"

export const StyledStarsList = styled(Section)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url(${starsImage});

  &::before {
  position: absolute;
  top: 36px;
  left: 0;
  width: 213px;
  height: 170px;
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${starsLeft});
}

  &::after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 111px;
  height: 158px;
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${starsRight});
}
`;

export const StarList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
 `;

export const StarItem = styled(Li)` 
  text-align: left;
  overflow: hidden;
`;
