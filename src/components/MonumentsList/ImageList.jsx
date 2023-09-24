import Image from "next/image";
import "../../sass/layouts/imageList.scss";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { useEffect } from "react";

export const ImageList = ({
  images,
  handleImagesPerPageChange,
  imagesPerPage,
}) => {
  useEffect(() => {
    const lightbox = new SimpleLightbox(".single__list a", {
      captionDelay: 250,
      disableRightClick: true,
      showCounter: false,
      scrollZoom: false,
    });

    lightbox.on("shown.simplelightbox", () => {
      document.body.classList.add("body-lock");
    });

    lightbox.on("close.simplelightbox", () => {
      document.body.classList.remove("body-lock");
    });
    return () => {
      lightbox.destroy();
    };
  }, [images]);

  return (
    <>
      {" "}
      <label className="single__label">
        Кількість зображень на сторінці:
        <select
          className="single__select"
          value={imagesPerPage}
          onChange={handleImagesPerPageChange}
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </label>
      <ul className="single__list">
        {images.map((img, index) => (
          <li className="single__item" key={img.id}>
            <a href={img.path}>
              {" "}
              <Image
                className="single__img"
                src={img.path}
                alt="catalog/monument-accessories"
                width="300"
                height="400"
                priority={true}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
