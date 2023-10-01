'use client';

import '../../sass/utils/_container.scss';
import '../../sass/layouts/imageList.scss';

import icons from './icons.json';
import MonumentsList from './MonumentsList';

const IconsList = () => {
  return <MonumentsList monumentsData={icons} title="Ікони до пам`ятників" />;
};
export default IconsList;
