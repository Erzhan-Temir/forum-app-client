import React, {FC, useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {TABLET_WIDTH} from '../../constants/constants';
import {useWindowDimensions} from '../../hooks/useWindowDimensions';
import ReactModal from "react-modal";
import "./Nav.css";
import SideBarMenus from './sidebar/SideBarMenus';

const Nav: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {width} = useWindowDimensions();

  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

  const onClickToggle = (evt: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(!showMenu);
  };

  const onRequestClose = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setShowMenu(false);
  };

  const getMobileMenu = () => {
    if (width <= TABLET_WIDTH) {
      return (
        <FontAwesomeIcon
          onClick={onClickToggle}
          icon={faBars}
          size="lg"
          className="nav-mobile-menu"
        />
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <ReactModal
        className="modal-menu"
        isOpen={showMenu}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
      >
        <SideBarMenus />
      </ReactModal>
      <nav>
        {getMobileMenu()}
        <strong>MegaForum</strong>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
