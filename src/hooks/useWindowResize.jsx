import { useState, useEffect } from "react";

const useWindowResize = ( homepage, photo ) => {
  const [images, setImages] = useState({
    homepage: {
      setHomepageImg: "",
      ...homepage,
    },
    photo: {
      setPhotoImg: "",
      ...photo,
    },
  });
  

  useEffect(() => {
    const handleLoad = () => {
      if (window.innerWidth < 768) {
        return {
          homepage: {
            setHomepageImg: homepage.mobileHomepage,
          },
          photo: {
            setPhotoImg: photo.mobilePhoto,
          },
        };
      } else if (window.innerWidth < 1440) {
        return {
          homepage: {
            setHomepageImg: homepage.tabletHomepage,
          },
          photo: {
            setPhotoImg: photo.tabletPhoto,
          },
        };
      } else {
        return {
          homepage: {
            setHomepageImg: homepage.desktopHomepage,
          },
          photo: {
            setPhotoImg: photo.desktopPhoto,
          },
        };
      }
    };
    const getInitialLoadImages = handleLoad();
    setImages(getInitialLoadImages);

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return images;
};

export default useWindowResize;
