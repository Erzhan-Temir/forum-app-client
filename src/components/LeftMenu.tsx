import React, {FC, useEffect, useState} from 'react';
import {useWindowDimensions} from '../hooks/useWindowDimensions';
import {TABLET_WIDTH} from '../constants/constants';
import Category from '../models/Category';
import {getCategories} from '../services/DataService';

const LeftMenu: FC = () => {
  const {width} = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(<div>Left Menu</div>);

  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const categoriesLoaded = categories.map((category) => {
          return <li key={category.id}>{category.name}</li>
        });
        setCategories(<ul className="category">{categoriesLoaded}</ul>);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (width <= TABLET_WIDTH) {
    return null;
  }

  return (
    <div className="leftmenu">{categories}</div>
  );
}

export default LeftMenu;
