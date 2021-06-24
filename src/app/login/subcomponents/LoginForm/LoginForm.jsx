import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../../../routing/AppRoute.enum';
import { StoreContext } from '../../../../store/StoreProvider';
import FormInput from '../../../components/FormInput/FormInput';
import Button from '../../../components/Button/Button';
import './LoginForm.scss';

const LoginForm = () => {

    const { setIsUserLogged, setUserData } = useContext(StoreContext);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleOnUsernameChange = (event) => setUserName(event.target.value);
    const handleOnPasswordChange = (event) => setPassword(event.target.value);
    const toClearInputs = () => {
        setUserName('');
        setPassword('');
    };

    const [loginFailedMessage, setLoginFailedMessage] = useState('');

    let history = useHistory();

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        if (username.length < 1) {
            setLoginFailedMessage('username must be longer than or equal to 1 characters');
            return;
        }

        if (password.length < 3) {
            setLoginFailedMessage('password must be longer than or equal to 3 characters');
            toClearInputs();
            return;
        }

        const url = 'https://join-tsh-api-staging.herokuapp.com/users/login';

        const requestBody = JSON.stringify({ username, password });
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })

        if (response.ok) {
            const userData = await response.json();
            setIsUserLogged(true);
            setUserData(userData);
            history.push(AppRoute.home);
        } else if (response.status === 401) {
            setLoginFailedMessage('Invalid user or password');
            toClearInputs();
        } else {     //another problems ...
            const problem = await response.json();
            setLoginFailedMessage(`login failed: ${problem.message}`);
            toClearInputs();
        }

    }
    return (
        <section className='form-container'>
            <form className='login-form d-flex flex-column' data-testid='login-form'>
                <h2 className='login-form__title mb-5'>Login</h2>
                {loginFailedMessage && <p className='login-form__loginfaild-message'>{loginFailedMessage}</p>}
                <FormInput type='text' name='username' labelValue='Username' value={username} onChangeFuncton={handleOnUsernameChange} />
                <FormInput type='password' name='password' labelValue='Password' value={password} onChangeFuncton={handleOnPasswordChange} />
                <Button text='Log in' handleOnClick={handleOnSubmit} />
                <a href="!#" className='login-form__reset-password my-2'>Forgot password?</a>
            </form>
        </section>
    );
}

export default LoginForm;