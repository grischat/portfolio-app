import "./scss/main.scss";
import Wrapper from "./components/Wrapper";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import MainContentHome from "./components/MainContentHome";
import ContactMeFooter from "./components/ContactMeFooter";

function App() {
  return (
    <div>
      <Wrapper>
        <HeaderNav />

        <MainContentHome />
        <ContactMeFooter />
      </Wrapper>

      <Footer showContactMe={true} />
    </div>
  );
}

export default App;
