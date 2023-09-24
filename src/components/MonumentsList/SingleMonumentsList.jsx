"use client";

import "../../sass/utils/_container.scss";
import "../../sass/layouts/imageList.scss";

import singleMonument from "./singleMonument.json";
import MonumentsList from "./MonumentsList";

const SingleMonumentsList = () => {
  return (
    <MonumentsList monumentsData={singleMonument} title="Одинарні пам`ятники" />
  );
};
export default SingleMonumentsList;
