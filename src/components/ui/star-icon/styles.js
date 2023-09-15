import styled from "styled-components";

export const StyledStarIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 43px;
  padding: 8px 16px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.$bgColor};
  box-sizing: border-box;
  border-radius: 8px 8px 8px 0;
  text-transform: uppercase;
`;