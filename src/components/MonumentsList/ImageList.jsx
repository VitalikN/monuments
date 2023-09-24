import { useEffect } from "react";
import Image from "next/image";
import "../../sass/layouts/imageList.scss";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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
      <label className="single__label">
        Кількість зображень на сторінці:
        <select
          className="single__select"
          value={imagesPerPage}
          onChange={handleImagesPerPageChange}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      <ul className="single__list">
        {images.map((img) => (
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
