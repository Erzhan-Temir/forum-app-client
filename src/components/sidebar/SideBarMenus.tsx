import React, {FC, useState, useEffect} from 'react';
import {faRegistered, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../../store/AppState';
import {UserProfileSetType} from '../../store/user/Reducer';
import "./SideBarMenus.css";
import Registration from '../auth/Registration';

const SideBarMenus: FC = () => {
  const [showRegister, setShowRegister] = useState(false);
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
      </ul>
    </React.Fragment>
  );
}

export default SideBarMenus;
