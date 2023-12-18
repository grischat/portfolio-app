import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import ProjectBackground from "../components/ProjectBackground";
import ContactMeFooter from "../components/ContactMeFooter";
import projectsData from "../data/projects.json";
//images import
import dineProjectPreview from "../media/previews/dine-preview.jpg";
import dictionaryProjectPreview from "../media/previews/dictionary-preview.jpg";
import passwordProjectPreview from "../media/previews/password-preview.jpg";
import portfolioProjectPreview from "../media/previews/portfolio-preview.jpg";
import githubProjectPreview from "../media/previews/github-search-user-preview.jpg";
import podProjectPreview from "../media/previews/pod-preview.jpg";
function PortfolioIndex() {
  return (
    <div>
      <Wrapper>
        <HeaderNav />
        <div className="projects">
          <ProjectBackground
            containerClass="project__container-rl"
            imageClass="image__preview-rl"
            textClass="text__rl"
            url="dine"
            imageSrc={dineProjectPreview}
            title={projectsData[5].title}
            description={projectsData[5].shortDescription}
          />
          <ProjectBackground
            containerClass="project__container-lr"
            imageClass="image__preview-lr"
            textClass="text__lr"
            url="dictionaryapp"
            imageSrc={dictionaryProjectPreview}
            title={projectsData[4].title}
            description={projectsData[4].shortDescription}
          />
          <ProjectBackground
            containerClass="project__container-rl"
            imageClass="image__preview-rl"
            textClass="text__rl"
            url="passwordapp"
            imageSrc={passwordProjectPreview}
            title={projectsData[3].title}
            description={projectsData[3].shortDescription}
          />
          <ProjectBackground
            containerClass="project__container-lr"
            imageClass="image__preview-lr"
            textClass="text__lr"
            url="portfolioapp"
            imageSrc={portfolioProjectPreview}
            title={projectsData[2].title}
            description={projectsData[2].shortDescription}
          />

          <ProjectBackground
            containerClass="project__container-rl"
            imageClass="image__preview-rl"
            textClass="text__rl"
            url="githubsearch"
            imageSrc={githubProjectPreview}
            title={projectsData[1].title}
            description={projectsData[1].shortDescription}
          />
          <ProjectBackground
            containerClass="project__container-lr"
            imageClass="image__preview-lr"
            textClass="text__lr"
            url="pod"
            imageSrc={podProjectPreview}
            title={projectsData[0].title}
            description={projectsData[0].shortDescription}
          />
        </div>

        <ContactMeFooter />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default PortfolioIndex;
