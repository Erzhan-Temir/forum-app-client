import React, {FC, useState, useEffect} from 'react';
import {faRegistered, faSignInAlt, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../../../store/AppState';
import {UserProfileSetType} from '../../../store/user/Reducer';
import "./SideBarMenus.css";
import Registration from '../../auth/Registration';
import Login from '../../auth/Login';
import Logout from '../../auth/Logout';

const SideBarMenus: FC = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [dispatch]);

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const onClickToggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <React.Fragment>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span
            onClick={onClickToggleRegister}
            className="menu-name"
          >register</span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickToggleLogin} className="menu-name">
            login
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onClickToggleLogout} className="menu-name">
            logout
          </span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>
      </ul>
    </React.Fragment>
  );
}

export default SideBarMenus;
