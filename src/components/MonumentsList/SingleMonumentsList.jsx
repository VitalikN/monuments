"use client";

import { useState } from "react";
import singleMonument from "./singleMonument.json";
import "../../sass/utils/_container.scss";
import "../../sass/layouts/singleMonumentsList.scss";
import { Pagination } from "../Pagination/Pagination";
import { ImageList } from "./ImageList";

const SingleMonumentsList = () => {
  const IMAGES_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const displayedImages = singleMonument.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  return (
    <section className="single__section">
      <div className="container">
        <h2 className="single__title">Одинарні пам`ятники</h2>

        <ImageList images={displayedImages} />

        <Pagination
          totalItems={singleMonument.length}
          itemsPerPage={IMAGES_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default SingleMonumentsList;
