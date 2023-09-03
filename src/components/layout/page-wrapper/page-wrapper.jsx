import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import "./page-wrapper.css"
import Footer from "../footer/footer";



function PageWrapper({stars}) {
  return(
  <>
    <Header/>
    <main className="page-wrapper__main">
      <MainPage stars={stars}/>
    </main>
    <Footer/>
  </>
  );
}

export default PageWrapper;