import "../scss/MainContentHome.scss";
import Button from "../components/Button";
import BottomLine from "../components/BottomLine";
import useWindowResize from "../hooks/useWindowResize";

import "../scss/main.scss";
import "../scss/Button.scss";
import { Link } from "react-router-dom";
import mobileHomepageHero from "../media/images/homepage/mobile/image-homepage-hero.jpg";
import tabletHomepageHero from "../media/images/homepage/tablet/image-homepage-hero.jpg";
import desktopHomepageHero from "../media/images/homepage/desktop/image-homepage-hero.jpg";
import mobilePhotoHero from "../media/images/homepage/mobile/image-homepage-profile.jpg";
import tabletPhotoHero from "../media/images/homepage/tablet/image-homepage-profile.jpg";
import desktopPhotoHero from "../media/images/homepage/desktop/image-homepage-profile.jpg";
function MainContentHome() {
  const homepage = {
    mobileHomepage: mobileHomepageHero,
    tabletHomepage: tabletHomepageHero,
    desktopHomepage: desktopHomepageHero,
  };
  const photo = {
    mobilePhoto: mobilePhotoHero,
    tabletPhoto: tabletPhotoHero,
    desktopPhoto: desktopPhotoHero,
  };
  const images = useWindowResize(homepage, photo);

  return (
    <div className="main__content">
      <img
        className="image__homepage"
        src={images.homepage.setHomepageImg}
        alt="Image of monitor with website in it"
      ></img>
      <div className="header__container">
        <h1 className="header__text-hey">
          Hey, my name is Hryhorii Kosolap and I am front-end developer{" "}
        </h1>
        <div className="btn__aboutme-container">
          <Button showIcon={true} className="btn__aboutme">
            ABOUT ME
          </Button>
        </div>
      </div>

      <div className="aboutme__container">
        <img
          className="image__photo"
          src={images.photo.setPhotoImg}
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
          <Link id="link" to="/portfolio-app/portfolio">
            <Button className="btn__goto">GO TO PORTFOLIO</Button>
          </Link>
          <BottomLine />
        </div>
      </div>
    </div>
  );
}

export default MainContentHome;
