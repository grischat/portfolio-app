import projectsData from "../data/projects.json";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BottomLine from "../components/BottomLine";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import "../scss/ProjectDetails.scss";
import "../scss/main.scss";
import ContactMeFooter from "../components/ContactMeFooter";
//images
import arrowLeftImg from "../media/images/icons/arrow-left.svg";
import arrowRightImg from "../media/images/icons/arrow-right.svg";
import podPreview from "../media/previews/pod-preview.jpg";
import githubSearchPreview from "../media/previews/github-search-user-preview.jpg";
import portfolioPreview from "../media/previews/portfolio-preview.jpg";
import passwordPreview from "../media/previews/password-preview.jpg";
import dictionaryPreview from "../media/previews/dictionary-preview.jpg";
import dinePreview from "../media/previews/dine-preview.jpg";
function ProjectDetails() {
  const projectPreviews = {
    pod: podPreview,
    githubsearch: githubSearchPreview,
    portfolioapp: portfolioPreview,
    passwordapp: passwordPreview,
    dictionaryapp: dictionaryPreview,
    dine: dinePreview,
  };
  const { projectId } = useParams();

  const projectIndex = projectsData.findIndex(
    (project) => project.id === projectId
  );
  const [currentProjectIndex, setCurrentProjectIndex] = useState(projectIndex);
  const totalProjects = projectsData.length;
  const navigate = useNavigate();

  const handlePrevProject = () => {
    const prevIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects;
    //Note for me: +totalProjects and % need to itarate through the 0 - n projects. So we never get -1,-2,-3 etc. e.g (0(currentProjectIndex)-1) % 10(projects total) = 9(The last project)

    setCurrentProjectIndex(prevIndex);
  };

  const handleNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % totalProjects;
    setCurrentProjectIndex(nextIndex);
  };
  const prevProjectIndex =
    (currentProjectIndex - 1 + totalProjects) % totalProjects;
  const nextProjectIndex = (currentProjectIndex + 1) % totalProjects;
  useEffect(() => {
    const newProjectId = projectsData[currentProjectIndex].id;
    navigate(`/portfolio-app/portfolio/${newProjectId}`);
  }, [currentProjectIndex, navigate]); //Note for me: Here we are changing the link to the next/prev project. We defining a function of navigation (react-router-dom function) and make dependencie between state changing and navigation func
  const project = projectsData[currentProjectIndex];
  
  if (!project) {
    return (
      <Wrapper>
        <HeaderNav />
        <div>Kurwa! Project not found</div>
        <Footer />
      </Wrapper>
    );
  }

  return (
    <div>
      <Wrapper>
        <HeaderNav />
        <div className="project__container">
          <BottomLine />
          <h1 className="project__header">{project.title}</h1>
          <img
            className="project__image"
            src={projectPreviews[project.id]}
            alt="Project preview"
          ></img>
          <p className="description__p">{project.shortDescription}</p>
          <p className="description__p-technologies">{project.technologies}</p>
          <a href={project.link} target="_blank" rel='noreferrer'>
            <Button className="btn__visitwebsite">VISIT WEBSITE</Button>
          </a>
          <BottomLine></BottomLine>
          <p className="description__p">{project.fullDescription}</p>

          <div className="slider__container">
            <div className="prev__container">
              <img
                id="img-prev"
                className="btn__attr"
                src={arrowLeftImg}
                alt="Arrow previous"
              />
              <h3 id="subheader-prev" className="btn__attr">
                Previous project
              </h3>
              <button className="btn__prev" onClick={handlePrevProject}>
                {projectsData[prevProjectIndex].title}
              </button>
            </div>
            <div className="next__container">
              <img
                id="img-next"
                className="btn__attr"
                src={arrowRightImg}
                alt="Arrow next"
              />
              <h3 id="subheader-next" className="btn__attr">
                Next project
              </h3>
              <button className="btn__next" onClick={handleNextProject}>
                {projectsData[nextProjectIndex].title}
              </button>
            </div>
            <div className="divider-line"></div>
          </div>
        </div>

        <ContactMeFooter />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default ProjectDetails;
