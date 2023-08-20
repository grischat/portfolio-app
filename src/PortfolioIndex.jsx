import Wrapper from "../components/Wrapper";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

import ProjectBackground from "../components/ProjectBackground";
function PortfolioIndex() {
  return (
    <Wrapper>
      <HeaderNav />
      <ProjectBackground
        imageSrc="../media/previews/pod-preview.jpg"
        title="POD"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam ratione quo reiciendis quia cupiditate? Reprehenderit, quasi minus itaque sequi exercitationem illum hic suscipit assumenda, voluptates labore, deleniti ut alias."
      />
      <ProjectBackground
        imageSrc="../media/previews/github-search-user-preview.jpg"
        title="GitHub User search"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam ratione quo reiciendis quia cupiditate? Reprehenderit, quasi minus itaque sequi exercitationem illum hic suscipit assumenda, voluptates labore, deleniti ut alias."
      />
      <ProjectBackground
        imageSrc="../media/previews/portfolio-preview.jpg"
        title="Portfolio app"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam ratione quo reiciendis quia cupiditate? Reprehenderit, quasi minus itaque sequi exercitationem illum hic suscipit assumenda, voluptates labore, deleniti ut alias."
      />
      
      <Footer />
      
    </Wrapper>
  );
}

export default PortfolioIndex;
