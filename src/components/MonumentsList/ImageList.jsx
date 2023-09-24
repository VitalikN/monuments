import Image from "next/image";
import "../../sass/layouts/imageList.scss";

export const ImageList = ({ images }) => {
  return (
    <ul className="single__list">
      {images.map((img, index) => (
        <li className="single__item" key={img.id}>
          <Image
            className="single__img"
            src={img.path}
            alt="catalog/monument-accessories"
            width="300"
            height="400"
            priority={true}
          />
        </li>
      ))}
    </ul>
  );
};
