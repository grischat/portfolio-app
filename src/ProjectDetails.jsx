import projectsData from "../data/projects.json";
import { useParams } from "react-router-dom";
import BottomLine from "../components/BottomLine";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import "../scss/ProjectDetails.scss";
import "../scss/main.scss";
function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData.find((project) => project.id === projectId);

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
    <Wrapper>
      <HeaderNav />
      <div className="project__container">
        <h1 className="project__header">{project.title}</h1>
        <img
          className="project__image"
          src={project.preview}
          alt="Project preview"
        ></img>
        <p className="description__p">{project.shortDescription}</p>
        <p className="description__p-technologies">{project.technologies}</p>
        <Button className="btn__visitwebsite">VISIT WEBSITE</Button>
        <BottomLine></BottomLine>
        <p className="description__p">{project.fullDescription}</p>
        <BottomLine/>
      </div>
      <Footer showContactMe={true}/>
    </Wrapper>
  );
}

export default ProjectDetails;
