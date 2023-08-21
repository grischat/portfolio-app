import BottomLine from "../components/BottomLine";
import Button from "../components/Button";
import "../scss/PortfolioIndex.scss";
import "../scss/ProjectBackground.scss";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
function ProjectBackground({ imageSrc, title, description, url }) {
  return (
    <div className="project__container">
      <img
        className="image__preview"
        src={imageSrc}
        alt={`Preview for ${title}`}
      ></img>
      <BottomLine />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={`/portfolio/${url}`}>
        <Button className="btn__viewproject">VIEW PROJECT</Button>
      </Link>

      <BottomLine />
    </div>
  );
}

export default ProjectBackground;
