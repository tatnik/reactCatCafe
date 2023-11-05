import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  padding: 0 24px;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 58px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.colorForButton};
`;
