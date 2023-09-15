import React from "react";
import { StyledStarIcon } from "./styles.js";

function StarIcon({ feature }) {
  let options;
  switch (feature.toLowerCase()) {
    case "new":
      options = {
        text: "New",
        color: "#ffb334"
      }
      break;
    case "soft":
      options = {
        text: "Ласковый",
        color: "#7fc92e"
      }
      break;
    default:
      options = {
        text: "",
        color: "#000"
      }
  }

  return (
    options.text ? (
      <StyledStarIcon $bgColor={options.color}>
        {options.text}
      </StyledStarIcon>
    ) : null
  );
}

export default StarIcon;