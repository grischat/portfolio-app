import React from "react";
import "../scss/main.scss";
import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";

function App() {
  return (
    <Wrapper>
      <HeaderNav />

      <MainContent />

      <Footer />
    </Wrapper>
  );
}

export default App;
