import "../scss/MainContentHome.scss";
import Button from "./Button";
import BottomLine from "./BottomLine";
import { useState, useEffect } from "react";
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
  //Changing images due to screen size
  const [homepageImgMobile, setHomepageImgMobile] = useState(
    "../media/images/homepage/mobile/image-homepage-hero.jpg"
  );
  const [homepageImgTablet, setHomepageImgTablet] = useState(
    "../media/images/homepage/tablet/image-homepage-hero.jpg"
  );

  const [photoImgMobile, setPhotoImgMobile] = useState(
    "../media/images/homepage/mobile/image-homepage-profile.jpg"
  );
  const [photoImgTablet, setPhotoImgTablet] = useState(
    "../media/images/homepage/tablet/image-homepage-profile.jpg"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHomepageImgMobile(
          "../media/images/homepage/mobile/image-homepage-hero.jpg"
        );
        setPhotoImgMobile(
          "../media/images/homepage/mobile/image-homepage-profile.jpg"
        );
      } else if (window.innerWidth > 768) {
        setHomepageImgTablet(
          "../media/images/homepage/tablet/image-homepage-hero.jpg"
        );
        setPhotoImgTablet(
          "../media/images/homepage/tablet/image-homepage-profile.jpg"
        );
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="main__content">
      <img
        className="image__homepage"
        src={window.innerWidth < 768 ? homepageImgMobile : homepageImgTablet}
        alt="Image of monitor with website in it"
      ></img>
      <div className="header__container">
        <h1 className="header__text-hey">
          Hey, my name is Hryhorii Kosolap and I am front-end developer{" "}
        </h1>
        <div className="btn__aboutme-container">
          <Button
            showIcon={true}
            className="btn__aboutme"
            onClick={scrollToTarget}
          >
            ABOUT ME
          </Button>
        </div>
      </div>

      <div className="aboutme__container">
        <img
          className="image__photo"
          src={window.innerWidth < 768 ? photoImgMobile : photoImgTablet}
          alt="My photo"
        />
        <div className="aboutme__container-textWithButton">
          <BottomLine />
          <h1 id="aboutme">About Me</h1>
          <p>
            I`m a front-end developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I`m based in Warsaw, Poland, but I`m happy working
            remotely and have experience in remote teams. When I`m not coding,
            you`ll find me in a boxing gym. Boxing helps me to clear my mind and
            get an inner strength.
          </p>
          <Link id="link" to="/portfolio">
            <Button className="btn__goto">GO TO PORTFOLIO</Button>
          </Link>
          <BottomLine />
        </div>
      </div>
    </div>
  );
}

export default MainContentHome;
