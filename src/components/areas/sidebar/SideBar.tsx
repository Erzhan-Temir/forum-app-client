import React, {FC} from 'react';
import {useWindowDimensions} from '../../../hooks/useWindowDimensions';
import {TABLET_WIDTH} from '../../../constants/constants';
import SideBarMenus from './SideBarMenus';

const SideBar: FC = () => {
  const {width} = useWindowDimensions();

  if (width <= TABLET_WIDTH) {
    return null;
  }

  return (
    <div className="sidebar">
      <SideBarMenus />
    </div>
  );
}

export default SideBar;
