import React from "react";
import "./star-icon.css"

function StarIcon({feature}) {
  let options;  
  switch (feature.toLowerCase()){
    case "new" :
      options = { 
       text: "New",
       color: "#ffb334"
       }
      break;
    case "soft" :
       options = {
        text: "Ласковый",
        color: "#7fc92e"
       }
      break;
    default:
      options = {
       text: "",
       color:"#000" 
      }
  }
  
  return (
        options.text.length
        ? <span className="star-icon" style={{backgroundColor: options.color}}>{options.text}</span>
        : null
);
}

export default StarIcon;