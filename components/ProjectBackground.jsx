import BottomLine from "../components/BottomLine";
import Button from "../components/Button";
import "../scss/PortfolioIndex.scss";
import "../scss/ProjectBackground.scss";

function ProjectBackground({imageSrc, title, description}) {
  return (
   <div className="project__container">
      <img
        className="image__preview"
        src={imageSrc} alt={`Preview for ${title}`}
      ></img>
      <BottomLine />
      <h1>{title}</h1>
      <p>{description}</p>
      <Button className="btn__viewproject">VIEW PROJECT</Button>
      <BottomLine />
    </div>
  );
}

export default ProjectBackground;
