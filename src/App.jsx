import React from "react";
import "../scss/main.scss";
import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import MainContentHome from "../components/MainContentHome";

function App() {
  return (
    <Wrapper>
      <HeaderNav />

      <MainContentHome />

      <Footer />
    </Wrapper>
  );
}

export default App;
