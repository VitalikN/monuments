import Image from "next/image";
import "../../sass/layouts/imageList.scss";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { useEffect } from "react";

export const ImageList = ({ images }) => {
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
      lightbox.destroy(); // це вимкне попередній екземпляр lightbox перед ініціалізацією нового
    };
  }, [images]);

  return (
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
  );
};
