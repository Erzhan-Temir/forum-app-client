import React, {FC, useState, useEffect} from 'react';
import {useWindowDimensions} from '../../../hooks/useWindowDimensions';
import {getTopCategories} from "../../../services/DataService";
import {TABLET_WIDTH} from '../../../constants/constants';
import TopCategory from "./TopCategory";
import groupBy from "lodash/groupBy";
import "./RightMenu.css"

const RightMenu: FC = () => {
  const {width} = useWindowDimensions();
  const [topCategories, setTopCategories] = useState<Array<JSX.Element> | undefined>();

  useEffect(() => {
    getTopCategories().then((res) => {
      const topCatThreads = groupBy(res, "category");
      const topElements = [];
      // eslint-disable-next-line prefer-const
      for (let key in topCatThreads) {
        const currentTop = topCatThreads[key];
        topElements.push(<TopCategory key={key} topCategories={currentTop} />);
      }
      setTopCategories(topElements);
    });
  }, []);

  if (width <= TABLET_WIDTH) {
    return null;
  }

  return (
    <div className="rightmenu rightmenu-container">{topCategories}</div>
  );
}

export default RightMenu;
