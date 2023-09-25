import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { ImageList } from "./ImageList";
import Image from "next/image";

const MonumentsList = ({ monumentsData, title }) => {
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  if (!monumentsData || monumentsData.length === 0) {
    return (
      <section className="technical__section">
        <h2 className="single__title">{title}</h2>
        <p className="technical__works">
          Ведуться технічні роботи. Перепрошуємо за незручності.
        </p>

        <Image
          className="technical__works__img"
          src={"/developer.jpeg"}
          alt="developer"
          width="600"
          height="400"
          priority={true}
        />
      </section>
    );

    // Ви можете змінити на своє повідомлення
  }

  const displayedImages = monumentsData.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handleImagesPerPageChange = (event) => {
    setImagesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <section className="single__section">
      <div className="container">
        <h2 className="single__title">{title}</h2>

        <ImageList
          images={displayedImages}
          handleImagesPerPageChange={handleImagesPerPageChange}
          imagesPerPage={imagesPerPage}
        />

        <Pagination
          totalItems={monumentsData.length}
          itemsPerPage={imagesPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default MonumentsList;
