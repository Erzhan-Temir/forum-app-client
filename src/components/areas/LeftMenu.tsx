import React, {FC, useEffect, useState} from 'react';
import {useWindowDimensions} from '../../hooks/useWindowDimensions';
import {TABLET_WIDTH} from '../../constants/constants';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppState} from "../../store/AppState";
import Category from "../../models/Category";

const LeftMenu: FC = () => {
  const categoriesState = useSelector((state: AppState) => state.categories);
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(() => {
    if (categoriesState) {
      console.log(categoriesState);
      const cats = categoriesState.map((cat: Category) => {
        return (
          <li key={cat.id}>
            <Link to={`/categorythreads/${cat.id}`}>{cat.name}</Link>
          </li>
        );
      });
      setCategories(<ul className="category">{cats}</ul>);
    }
  }, [categoriesState]);

  if (width <= TABLET_WIDTH) {
    return null;
  }

  return (
    <div className="leftmenu">{categories}</div>
  );
}

export default LeftMenu;
