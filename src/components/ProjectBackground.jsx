import BottomLine from "./BottomLine";
import Button from "./Button";
import "../scss/PortfolioIndex.scss";
import "../scss/ProjectBackground.scss";
import { Link } from "react-router-dom";

function ProjectBackground({
  imageSrc,
  title,
  description,
  url,
  containerClass = "project__container",
  imageClass = "image__preview",
  textClass = "project__text",
}) {
  return (
    <div className={containerClass}>
      <img className={imageClass} src={imageSrc} alt={`Preview for ${title}`} />
      <div className={textClass}>
        <BottomLine />
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={`/portfolio/${url}`}>
          <Button className="btn__viewproject">VIEW PROJECT</Button>
        </Link>
        <BottomLine />
      </div>
    </div>
  );
}

export default ProjectBackground;
