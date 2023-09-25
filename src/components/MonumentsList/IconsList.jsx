"use client";

import "../../sass/utils/_container.scss";
import "../../sass/layouts/imageList.scss";

import singleMonument from "./singleMonument.json";
import MonumentsList from "./MonumentsList";

const IconsList = () => {
  return (
    <MonumentsList
      //   monumentsData={singleMonument}
      title="Ікони до пам`ятників"
    />
  );
};
export default IconsList;
