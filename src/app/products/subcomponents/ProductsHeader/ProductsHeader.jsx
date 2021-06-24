import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../components/Checkbox/Checkbox';
import UserInfoBar from '../../../components/UserInfoBar/UserInfoBar';
import './ProductsHeader.scss';

const ProductsHeader = ({ isActiveRequered, isPromoRequered, searchingQuery, searchingChange, toggleActive, togglePromo }) => {

    return (
        <header className='products-header' data-testid='products-header'>
            <div className='products-header__grid-container container-xl pt-5 pt-lg-3 pb-3'>
                <div className='products-header__logo logo-header'>join.tsh.io</div>
                <input type="text"
                    className='products-header__searching py-3 my-3'
                    value={searchingQuery}
                    onChange={searchingChange}
                    placeholder='Search'
                />
                <div className='products-header__checkboxes py-2'>
                    <Checkbox id='activeCheckbox' isChecked={isActiveRequered} handleOnChange={toggleActive} labelName='Active' />
                    <Checkbox id='promoCheckbox' isChecked={isPromoRequered} handleOnChange={togglePromo} labelName='Promo' />
                </div>
                <UserInfoBar />
            </div>
        </header>
    );
}

ProductsHeader.propTypes = {
    isActiveRequered: PropTypes.bool,
    isPromoRequered: PropTypes.bool,
    searchingQuery: PropTypes.string,
    searchingChange: PropTypes.func,
    toggleActive: PropTypes.func,
    togglePromo: PropTypes.func
}

export default ProductsHeader;