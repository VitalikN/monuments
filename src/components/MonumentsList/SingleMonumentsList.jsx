"use client";

import { useState } from "react";
import singleMonument from "./singleMonument.json";
import "../../sass/utils/_container.scss";
import "../../sass/layouts/imageList.scss";
import { Pagination } from "../Pagination/Pagination";
import { ImageList } from "./ImageList";

const SingleMonumentsList = () => {
  const [imagesPerPage, setImagesPerPage] = useState(3); // Замінити константу на стан
  const [currentPage, setCurrentPage] = useState(1);

  const displayedImages = singleMonument.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handleImagesPerPageChange = (event) => {
    setImagesPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset the current page to 1 when the number of images per page changes
  };

  return (
    <section className="single__section">
      <div className="container">
        <h2 className="single__title">Одинарні пам`ятники</h2>
        <label>
          Зображень на сторінці:
          <select value={imagesPerPage} onChange={handleImagesPerPageChange}>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
          </select>
        </label>
        <ImageList images={displayedImages} />

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
