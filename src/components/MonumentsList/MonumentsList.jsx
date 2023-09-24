import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { ImageList } from "./ImageList";

const MonumentsList = ({ monumentsData, title }) => {
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
