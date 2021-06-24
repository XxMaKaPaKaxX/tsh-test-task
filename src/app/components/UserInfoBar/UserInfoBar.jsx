import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import { AppRoute } from '../../../routing/AppRoute.enum';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import './UserInfoBar.scss';

const UserInfoBar = () => {
    const { isUserLogged, setIsUserLogged } = useContext(StoreContext);
    const logOut = () => setIsUserLogged(false);
    const [isDropdownShown, setIsDropdownShown] = useState(false);
    const toggleDropdownVisibility = () => setIsDropdownShown(!isDropdownShown);

    let history = useHistory();


    if (isUserLogged) {
        return (
            <div className="user-infobar" data-testid='user-infobar'>
                <div className='user-avatar'>
                    <div className='avatar-container' onClick={toggleDropdownVisibility}>
                        <img src='./assets/Oval.png' alt="user-avatar" />
                    </div>
                    <div className={isDropdownShown ? 'user-avatar__dropdown user-avatar__dropdown--active shadow-5' : 'user-avatar__dropdown'}>
                        <p className='user-avatar__dropdown__item m-0 py-3 px-2' onClick={logOut}>
                            Logout
                        </p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="user-infobar" data-testid='user-infobar'>
                <Button
                    text='Log in'
                    outline
                    handleOnClick={() => history.push(AppRoute.login)}
                />
            </div>
        )


    }
}

export default UserInfoBar;