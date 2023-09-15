import React from "react";
import Button from "../../ui/button/button.jsx";

function Nav() {
  return (
    <nav>
      <Button minWidth={260} link="/buy">Купить билет</Button>
    </nav>
  );
}

export default Nav;