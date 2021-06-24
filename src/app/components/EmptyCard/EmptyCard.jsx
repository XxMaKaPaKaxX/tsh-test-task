import React from 'react';
import { ReactComponent as EmptyIcon } from '../../../assets/svg/desk.svg';
import './EmptyCard.scss';

const EmptyCard = () => {
    return (
        <div className='container mt-3 mt-lg-5' data-testid="empty-card">
            <div className='empty-card d-flex flex-column justify-content-center align-items-center mx-auto'>
                <EmptyIcon className='empty-card__icon mb-3' data-testid="empty-card-icon" />
                <p className='empty-card__header my-1'>Ooops… It’s empty here</p>
                <p className='empty-card__description my-1'>There are no products on the list</p>
            </div>
        </div>
    );
}

export default EmptyCard;