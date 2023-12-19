import { useState, useEffect } from "react";

const useWindowResize = (homepage, photo) => {
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
    const handleResize = () => {
      setImages((prevImages) => {
        let resizedHomepage;
        let resizedPhoto;
        if (window.innerWidth < 768) {
          resizedHomepage = homepage.mobileHomepage;
          resizedPhoto = photo.mobilePhoto;
        } else if (window.innerWidth > 768 && window.innerWidth < 1440) {
          resizedHomepage = homepage.tabletHomepage;
          resizedPhoto = photo.tabletPhoto;
        } else {
          resizedHomepage = homepage.desktopHomepage;
          resizedPhoto = photo.desktopPhoto;
        }
        return {
          ...prevImages,
          homepage: {
            ...prevImages.homepage,
            setHomepageImg: resizedHomepage,
          },
          photo: {
            ...prevImages.photo,
            setPhotoImg: resizedPhoto,
          },
        };
      });
    };

    // Вызываем handleResize при загрузке страницы
    handleResize();

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return images;
};

export default useWindowResize;
