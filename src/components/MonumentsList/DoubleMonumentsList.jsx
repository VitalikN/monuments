"use client";

import doubleMonuments from "./doubleMonuments.json";
import "../../sass/utils/_container.scss";
import "../../sass/layouts/imageList.scss";

import MonumentsList from "./MonumentsList";

const DoubleMonumentsList = () => {
  return (
    <MonumentsList
      monumentsData={doubleMonuments}
      title="Подвійні пам`ятники"
    />
  );
};

export default DoubleMonumentsList;
