import "../scss/MainContentHome.scss";
import Button from "./Button";
import BottomLine from "./BottomLine";
import "../scss/main.scss";
import "../scss/Button.scss";
import { Link } from "react-router-dom";
function MainContentHome() {
  const scrollToTarget = () => {
    //Scroll to the About Me section
    const targetElement = document.getElementById("aboutme");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="main__content">
      <img
        className="image__homepage"
        src="../media/images/homepage/mobile/image-homepage-hero.jpg"
        alt="Image of monitor with website in it"
      ></img>
      <h1>Hey, my name is Hryhorii Kosolap and I am front-end developer </h1>
      <Button showIcon={true} className="btn__aboutme" onClick={scrollToTarget}>
        ABOUT ME
      </Button>
      <img
        className="image__photo"
        src="../media/images/homepage/mobile/image-homepage-profile.jpg"
        alt="Image of monitor with website in it"
      ></img>
      <BottomLine />
      <h1 id="aboutme">About Me</h1>
      <p>
        I`m a front-end developer looking for a new role in an exciting company.
        I focus on writing accessible HTML, using modern CSS practices and
        writing clean JavaScript. When writing JavaScript code, I mostly use
        React, but I can adapt to whatever tools are required. I`m based in
        Warsaw, Poland, but I`m happy working remotely and have experience in
        remote teams. When I`m not coding, you`ll find me in a boxing gym.
        Boxing helps me to clear my mind and get an inner strength.
      </p>
      <Link to='/portfolio'>
        <Button showIcon={false} className="btn__goto">
          GO TO PORTFOLIO
        </Button>
      </Link>
      <BottomLine />
      
    </div>
  );
}

export default MainContentHome;
