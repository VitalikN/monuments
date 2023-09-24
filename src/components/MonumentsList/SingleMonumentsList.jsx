"use client";

import { useState } from "react";
import singleMonument from "./singleMonument.json";
import "../../sass/utils/_container.scss";
import "../../sass/layouts/imageList.scss";
import { Pagination } from "../Pagination/Pagination";
import { ImageList } from "./ImageList";

const SingleMonumentsList = () => {
  const [imagesPerPage, setImagesPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const displayedImages = singleMonument.slice(
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
        <h2 className="single__title">Одинарні пам`ятники</h2>

        <ImageList
          images={displayedImages}
          handleImagesPerPageChange={handleImagesPerPageChange}
          imagesPerPage={imagesPerPage}
        />

        <Pagination
          totalItems={singleMonument.length}
          itemsPerPage={imagesPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default SingleMonumentsList;
