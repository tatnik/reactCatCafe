import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import { Main } from "./styles";



function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;