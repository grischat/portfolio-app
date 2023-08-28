import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

import ProjectBackground from "../components/ProjectBackground";
import ContactMeFooter from "../components/ContactMeFooter";
function PortfolioIndex() {
  return (
    <div>
      <Wrapper>
        <HeaderNav />
        <div className="projects">
          <ProjectBackground
            containerClass="project__container-lr"
            imageClass="image__preview-lr"
            textClass="text__lr"
            url="pod"
            imageSrc="../media/previews/pod-preview.jpg"
            title="POD"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam ratione quo reiciendis quia cupiditate? Reprehenderit, quasi minus itaque sequi exercitationem illum hic suscipit assumenda, voluptates labore, deleniti ut alias."
          />
          <ProjectBackground
            containerClass="project__container-rl"
            imageClass="image__preview-rl"
            url="githubsearch"
            imageSrc="../media/previews/github-search-user-preview.jpg"
            title="GitHub User search"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam ratione quo reiciendis quia cupiditate? Reprehenderit, quasi minus itaque sequi exercitationem illum hic suscipit assumenda, voluptates labore, deleniti ut alias."
          />
          <ProjectBackground
            containerClass="project__container-lr"
            imageClass="image__preview-lr"
            textClass="text__lr"
            url="portfolioapp"
            imageSrc="../media/previews/portfolio-preview.jpg"
            title="Portfolio app"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam ratione quo reiciendis quia cupiditate? Reprehenderit, quasi minus itaque sequi exercitationem illum hic suscipit assumenda, voluptates labore, deleniti ut alias."
          />
        </div>
        <ContactMeFooter/>
      </Wrapper>
      <Footer/>
    </div>
  );
}

export default PortfolioIndex;
