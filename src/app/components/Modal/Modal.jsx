import React from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/svg/close.svg';
import './Modal.scss';

const Modal = ({ children, closeModal = Function.prototype, mustCloseFromOutSide = true }) => {

    return (
        <section className='modalX' data-testid="modal">
            {mustCloseFromOutSide ? <div className="modalX__overlay" onClick={closeModal}></div>
                : <div className="modalX__overlay"></div>
            }

            <div className="modalX__content">
                <button className='modalX__close-button' onClick={closeModal} data-testid="closing-button"><CloseIcon /></button>
                {children}
            </div>
        </section>
    );
}

export default Modal;