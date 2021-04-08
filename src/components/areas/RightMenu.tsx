import React, {FC} from 'react';
import {useWindowDimensions} from '../../hooks/useWindowDimensions';
import {TABLET_WIDTH} from '../../constants/constants';

const RightMenu: FC = () => {
  const {width} = useWindowDimensions();

  if (width <= TABLET_WIDTH) {
    return null;
  }

  return (
    <div className="rightmenu">Right Menu</div>
  );
}

export default RightMenu;
