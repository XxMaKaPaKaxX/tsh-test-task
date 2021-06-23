import React from 'react';
import LoginForm from './subcomponents/LoginForm/LoginForm';
import './Login.scss';

export const Login = () => {

  return (
    <div className='page-wraper'>
      <aside className='aside-img'>
        <div className='img-conteiner'>
          <img src="./assets/Bitmap.png" alt="aside-cover" />
        </div>
      </aside>

      <main className='main main-login d-flex flex-column px-3 px-lg-0 py-4'>
        <header className='main-login__header'>
          <h2 className='logo-header'>join.tsh.io</h2>
        </header>
        <LoginForm />
      </main>
    </div>
  );
};
