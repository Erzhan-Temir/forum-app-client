import React, {FC, useEffect} from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../../store/AppState';
import {UserProfileSetType} from '../../store/user/Reducer';
import "./SideBarMenus.css";

const SideBarMenus: FC = () => {
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

  return (
    <React.Fragment>
      <ul>
        <FontAwesomeIcon icon={faUser} />
        <span className="menu-name">{user?.userName}
        </span>
      </ul>
    </React.Fragment>
  );
}

export default SideBarMenus;
