import React, {FC} from 'react';
import {useWindowDimensions} from '../hooks/useWindowDimensions';
import {TABLET_WIDTH} from '../constants/constants';

const LeftMenu: FC = () => {
  const {width} = useWindowDimensions();

  if (width <= TABLET_WIDTH) {
    return null;
  }

  return (
    <div className="leftmenu">Left Menu</div>
  );
}

export default LeftMenu;
