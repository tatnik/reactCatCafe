import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import { Main } from "./styles";
import BuyPage from "../../pages/buy-page/buy-page";



function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <BuyPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;