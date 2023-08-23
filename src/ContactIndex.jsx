import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import BottomLine from "../components/BottomLine";
import ContactForm from "../components/ContactForm";


import "../scss/ContactIndex.scss";
function Contact() {
  return (
    <Wrapper>
      <HeaderNav />
      <BottomLine/>
      <h1>Get In Touch</h1>
      <p>
        I`d love to hear about what you`re working on and how I could help. I`m
        currently looking for a new role and am open to a wide range of
        opportunities. My preference would be to find a position in a company in
        Warsaw. But I`m also happy to hear about opportunites that don`t fit
        that description. I`m a hard-working and positive person who will always
        approach each task with a sense of purpose and attention to detail.
        Please do feel free to check out my online profiles below and get in
        touch using the form.
      </p>
      <ul className="links__icons-contact-page">
        <li>
          <a href="https://github.com/grischat" target="_blank">
            <img src="../media/images/icons/github.svg" alt="github icon"></img>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/KosolapH" target="_blank">
            <img
              src="../media/images/icons/twitter.svg"
              alt="twitter icon"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hryhorii-kosolap-1b7892231/"
            target="_blank"
          >
            <img
              src="../media/images/icons/linkedin.svg"
              alt="linkedin icon"
            ></img>
          </a>
        </li>
      </ul>
      <BottomLine/>
      <h1>Contact Me</h1>
      <ContactForm/>
      
      <Footer showContactMe={false} />
    </Wrapper>
  );
}

export default Contact;
